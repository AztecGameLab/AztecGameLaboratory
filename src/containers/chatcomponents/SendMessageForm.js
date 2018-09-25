import React, { Component } from "react";

// TODO: Coordinate message submission through redux
class SendMessageForm extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle input
  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  // handle message submit
  handleSubmit(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ""
    });
  }

  render() {
    return (
      <form className="send-message-form" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type a message!"
          type="text"
        />
      </form>
    );
  }
}

export default SendMessageForm;
