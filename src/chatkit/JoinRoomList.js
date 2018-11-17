import React, { Component } from "react";

class JoinRoomList extends Component {
  renderRooms = rooms => {
    return rooms.map(room => {
      const { name, id } = room;
      return (
        <div key={id}>
          <input name={name} id={id} type="checkbox" onChange={this.handleChange} />
          <label htmlFor={name}> {name} </label>
        </div>
      );
    });
  };

  handleChange = event => {
    this.props.addToSelected(event.target.id);
  };

  render() {
    const { rooms } = this.props;
    return (
      <div>
        {rooms
          ? rooms.length === 0
            ? "No rooms to join!"
            : this.renderRooms(rooms)
          : "Loading..."}
      </div>
    );
  }
}

export default JoinRoomList;
