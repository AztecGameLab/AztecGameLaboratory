import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUserUID } from "../../redux/selectors";
import { sendJoinableRooms } from "../../redux/actions";
import { ChatManager, TokenProvider } from "@pusher/chatkit";
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";
import RoomList from "./RoomList";
import CreateJoinModal from "./CreateJoinModal";

class ChatContainer extends Component {
  state = {
    currentUser: {},
    messages: [],
    roomId: 19017534,
    isCJModalOpen: false
  };

  componentDidMount() {
    const { uid } = this.props;
    // Chatkit vars initialization
    const chatManager = new ChatManager({
      instanceLocator: process.env.REACT_APP_CHATKIT_INSTANCE_LOCATOR,
      userId: uid,
      tokenProvider: new TokenProvider({
        url: process.env.REACT_APP_CHATKIT_TEST_TOKEN
      })
    });

    // Chatkit connect to server
    chatManager.connect().then(currentUser => {
      this.setState({ currentUser });
      return this.joinRoom(this.state.roomId);
    });
  }

  // Post message to server using chatkit
  sendMessage = msg => {
    const { currentUser, roomId } = this.state;
    currentUser.sendMessage({
      text: msg,
      roomId: roomId
    });
  };

  // Have user join room and retrieve messages
  // Issue: live updating of joinable rooms when clicked in join rooms
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

  // Refreshes list of joinable rooms of user
  refreshJoinableRooms = () => {
    const { currentUser } = this.state;
    const { sendJoinableRooms } = this.props;
    currentUser.getJoinableRooms().then(rooms => {
      sendJoinableRooms(rooms);
    });
  };

  // Toggle functions for opening create/join room modal
  showCJModal = () => {
    this.setState({ isCJModalOpen: true });
    this.refreshJoinableRooms();
  };

  hideCJModal = () => {
    this.setState({ isCJModalOpen: false });
  };

  render() {
    const { currentUser, messages, isCJModalOpen } = this.state;
    // console.log("USERS: ", currentUser ? currentUser.users : "none lol");
    return (
      <div>
        <Title />
        <CreateJoinModal
          isCJModalOpen={isCJModalOpen}
          hideCJModal={this.hideCJModal}
          joinRoom={this.joinRoom}
        />
        <button onClick={this.showCJModal}>Create or Join</button>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendJoinableRooms
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
