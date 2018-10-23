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
    const { rooms } = this.props;
    return <div>{rooms ? this.renderRooms(rooms) : "Loading..."}</div>;
  }
}

export default RoomList;
