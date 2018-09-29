import React, { Component } from "react";
import { ChatManager, TokenProvider } from "@pusher/chatkit";

import MessageList from "./chatcomponents/MessageList";
import SendMessageForm from "./chatcomponents/SendMessageForm";
import RoomList from "./chatcomponents/RoomList";

// Hardcoded room values for testing
const roomId = 16925280;
//var user = {};

class ChatContainer extends Component {
  //TODO: Convert message sending and fetching into redux
  constructor() {
    super();
    this.state = {
      user: {},
      messages: []
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    // Chatkit vars initialization
    const chatManager = new ChatManager({
      instanceLocator: process.env.REACT_APP_CHATKIT_INSTANCE_LOCATOR,
      userId: "test",
      tokenProvider: new TokenProvider({
        url: process.env.REACT_APP_CHATKIT_TEST_TOKEN
      })
    });

    // Chatkit connect to server
    chatManager
      .connect()
      .then(currentUser => {
        // currentUser obj contains methods for current user to perform
        // Important to store user to outer scope so React is able to access user obj
        this.setState({
          user: currentUser
        });
        //console.log(this.state.user);
        currentUser.subscribeToRoom({
          roomId: roomId,
          hooks: {
            onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              });
            }
          }
        });
      })
      .catch(error => {
        console.log("error:", error);
      });
  }

  //User post message
  sendMessage(msg) {
    this.state.user.sendMessage({
      text: msg,
      roomId: roomId
    });
  }

  render() {
    //console.log(this.state.user);
    return (
      <div>
        <Title />
        <RoomList rooms={this.state.user.rooms} />
        <MessageList messages={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}

function Title() {
  return <h2>Chat:</h2>;
}

export default ChatContainer;
