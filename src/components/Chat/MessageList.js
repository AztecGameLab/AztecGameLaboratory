import React, { Component } from "react";

class MessageList extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ul>
        {messages.map(message => {
          return (
            <li key={message.id}>
              {message.sender.name ? (
                <div>
                  <div>{message.sender.name}</div>
                  <div>{message.text}</div>
                </div>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MessageList;
