import React, { Component } from "react";

class MessageList extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ul>
        {messages.map(message => {
          return (
            <li key={message.id}>
              <div>{message.sender && message.sender.name}</div>
              <div>{message.text}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MessageList;
