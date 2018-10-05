import React, { Component } from "react";

class RoomList extends Component {
  renderRooms = rooms => {
    return rooms.map(room => {
      const { name, id } = room;
      const { joinRoom } = this.props;
      return (
        <div key={id}>
          <button onClick={() => joinRoom(id)}>{name}</button>
        </div>
      );
    });
  };

  render() {
    const { joinableRooms, rooms } = this.props;
    return (
      <div>
        Your rooms:
        {rooms ? this.renderRooms(rooms) : "Loading..."}
        Joinable rooms:
        {joinableRooms ? this.renderRooms(joinableRooms) : "Loading..."}
      </div>
    );
  }
}

export default RoomList;