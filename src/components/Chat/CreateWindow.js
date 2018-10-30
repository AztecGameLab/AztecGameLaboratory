import React, { Component } from "react";

class CreateWindow extends Component {
  state = {
    roomName: "",
    isPrivate: false,
    userIds: []
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { roomName, isPrivate } = this.state;
    const { joinRoom, currentUser, hideCJModal } = this.props;
    event.preventDefault();
    currentUser
      .createRoom({
        name: roomName,
        private: isPrivate
      })
      .then(room => {
        this.setState({
          roomName: "",
          isPrivate: false,
          userIds: []
        });
        joinRoom(room.id);
        hideCJModal();
        console.log(`Created room called ${room.name}`);
      })
      .catch(err => {
        console.log(`Error creating room ${err}`);
      });
  };

  render() {
    const { isPrivate } = this.state;
    return (
      <div>
        <p>Create Window</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="roomName">Name:</label>
          <input
            name="roomName"
            id="roomName"
            type="text"
            placeholder="Enter room name"
            value={this.state.roomName}
            onChange={this.handleChange}
          />
          <br />
          <input
            name="isPrivate"
            id="isPrivate"
            type="checkbox"
            checked={this.state.isPrivate}
            onChange={this.handleChange}
          />
          <label htmlFor="isPrivate">Private Room</label>
          <br />
          {isPrivate ? "show users" : ""}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateWindow;
