import React, { Component } from "react";

class MessageList extends Component {
  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map(message => {
          return (
            <li key={message.id}>
              <div>{message.senderId}</div>
              <div>{message.text}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MessageList;
