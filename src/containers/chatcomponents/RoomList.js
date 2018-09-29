import React, { Component } from "react";

class RoomList extends Component {
  renderRooms = rooms => {
    return Object.keys(rooms).map(roomId => {
      const { name } = rooms[roomId];
      return (
        <div key={roomId}>
          <p>{name}</p>
        </div>
      );
    });
  };

  render() {
    console.log(this.props.rooms);
    const { rooms } = this.props;
    return <div>{rooms ? this.renderRooms(rooms) : "Loading..."}</div>;
  }
}

export default RoomList;
