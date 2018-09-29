import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserUID } from "../redux/selectors";
import { ChatManager, TokenProvider } from "@pusher/chatkit";
import MessageList from "./chatcomponents/MessageList";
import SendMessageForm from "./chatcomponents/SendMessageForm";
import RoomList from "./chatcomponents/RoomList";

class ChatContainer extends Component {
  state = {
    currentUser: {},
    messages: [],
    roomId: 16925280
  };

  componentDidMount() {
    const { uid } = this.props;
    const { roomId } = this.state;
    // Chatkit vars initialization
    const chatManager = new ChatManager({
      instanceLocator: process.env.REACT_APP_CHATKIT_INSTANCE_LOCATOR,
      userId: uid,
      tokenProvider: new TokenProvider({
        url: process.env.REACT_APP_CHATKIT_TEST_TOKEN
      })
    });

    // Chatkit connect to server
    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser });
        return this.joinRoom(roomId);
      })
      .then(currentRoom => {
        this.setState({ currentRoom });
      });
  }

  //User post message
  sendMessage = msg => {
    const { currentUser, roomId } = this.state;
    currentUser.sendMessage({
      text: msg,
      roomId: roomId
    });
  };

  joinRoom = roomId => {
    const { currentUser } = this.state;
    this.setState({
      messages: [],
      roomId
    });
    return currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onNewMessage: message => {
          this.setState({
            messages: [...this.state.messages, message]
          });
        }
      }
    });
  };

  render() {
    const { currentUser, messages } = this.state;
    return (
      <div>
        <Title />
        <RoomList rooms={currentUser.rooms} joinRoom={this.joinRoom} />
        <MessageList messages={messages} />
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}

function Title() {
  return <h2>Chat:</h2>;
}

const mapStateToProps = state => {
  return {
    uid: getUserUID(state)
  };
};

export default connect(mapStateToProps)(ChatContainer);
