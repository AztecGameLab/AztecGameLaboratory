// Join room content container for modal
// TODO: Joining does not clear checkboxes and toggle
// checkboxes not functioning properly

import React, { Component } from "react";
import { connect } from "react-redux";
import { getJoinableRooms } from "../../redux/selectors";
import JoinRoomList from "./JoinRoomList";

class JoinWindow extends Component {
  state = {
    rooms: this.props.joinableRooms,
    filteredRooms: [],
    selectedRooms: []
  };

  componentWillMount() {
    this.setState({
      filteredRooms: this.state.rooms
    });
  }

  resetRooms = () => {
    const { joinableRooms } = this.props;
    this.setState({
      rooms: joinableRooms,
      filteredRooms: joinableRooms,
      selectedRooms: []
    });
  };

  // Filter rooms by name
  filterRooms = event => {
    var filteredRooms = this.state.rooms;
    filteredRooms = filteredRooms.filter(room => {
      return room.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ filteredRooms });
  };

  addToSelected = id => {
    var selectedRooms = [...this.state.selectedRooms];
    var tmp = selectedRooms.indexOf(id);
    console.log(tmp);
    if (tmp === -1) {
      selectedRooms.push(parseInt(id));
      this.setState({ selectedRooms });
    } else {
      selectedRooms.splice(parseInt(tmp), 1);
      this.setState({ selectedRooms });
    }
  };

  handleJoin = () => {
    const { currentUser, hideCJModal, joinRoom } = this.props;
    var selectedRooms = [...this.state.selectedRooms];
    var roomToJoin = -1;
    for (let i = 0; i < selectedRooms.length; i++) {
      if (i === selectedRooms.length - 1) roomToJoin = selectedRooms[i];
      currentUser.joinRoom({ roomId: selectedRooms[i] }).then(room => {
        console.log(`Joined room with ID: ${room.id}`);
      });
    }
    joinRoom(roomToJoin);
    this.resetRooms();
    hideCJModal();
  };

  render() {
    const { joinRoom } = this.props;
    const { filteredRooms } = this.state;
    console.log(this.state.selectedRooms);
    return (
      <div>
        <p>Join Window</p>
        <input type="text" placeholder="Search for Rooms!" onChange={this.filterRooms} />
        <button onClick={this.handleJoin}> Join Rooms </button>
        <JoinRoomList
          joinRoom={joinRoom}
          rooms={filteredRooms}
          addToSelected={this.addToSelected}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    joinableRooms: getJoinableRooms(state)
  };
};

export default connect(mapStateToProps)(JoinWindow);
