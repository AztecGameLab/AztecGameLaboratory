import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserUID } from "../../redux/selectors";
import { ChatManager, TokenProvider } from "@pusher/chatkit";
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";
import RoomList from "./RoomList";
import CreateJoinButton from "./CreateJoinButton";
import CreateJoinModal from "./CreateJoinModal";

class ChatContainer extends Component {
  state = {
    currentUser: {},
    messages: [],
    roomId: 16925280,
    joinableRooms: [],
    isCJModalOpen: false
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
        currentUser.getJoinableRooms().then(rooms => {
          this.setState({ currentUser, joinableRooms: rooms, allUsers: currentUser.users });
          return this.joinRoom(roomId);
        });
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

  addPersonToRoom = userId => {
    const { currentUser, roomId } = this.state;
    currentUser.addPersonToRoom({
      userId,
      roomId
    });
  };

  showCJModal = () => {
    this.setState({ isCJModalOpen: true });
  };

  hideCJModal = () => {
    this.setState({ isCJModalOpen: false });
  };

  render() {
    const { currentUser, joinableRooms, messages, isCJModalOpen } = this.state;
    //console.log("USERS: ", currentUser ? currentUser.users : "none lol");
    return (
      <div>
        <Title />
        <CreateJoinModal isCJModalOpen={isCJModalOpen} hideCJModal={this.hideCJModal} />
        <CreateJoinButton showCJModal={this.showCJModal} />
        <RoomList
          rooms={currentUser.rooms}
          joinableRooms={joinableRooms}
          joinRoom={this.joinRoom}
        />
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
