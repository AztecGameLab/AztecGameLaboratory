// Join room content container for modal

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

  // Clears search parameters and updates newest joinable rooms
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

  // Adds and removes rooms to be joined
  addToSelected = id => {
    var selectedRooms = [...this.state.selectedRooms];
    var tmp = this.getIndex(selectedRooms, parseInt(id));
    console.log(tmp);
    if (tmp === -1) {
      selectedRooms.push(parseInt(id));
      this.setState({ selectedRooms });
    } else {
      selectedRooms.splice(parseInt(tmp), 1);
      this.setState({ selectedRooms });
    }
  };

  // helper for searching element in array
  getIndex = (arr, val) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return i;
      }
    }
    return -1; //to handle the case where the value doesn't exist
  };

  // Handles clicking join after all desired rooms to be joined have been selected
  handleJoin = () => {
    const {
      currentUser,
      hideCJModal,
      joinRoom,
      refreshJoinableRooms,
      handleCreateClick
    } = this.props;
    var selectedRooms = [...this.state.selectedRooms];
    // Sets newly displayed room as latest room checked by user
    var roomToJoin = -1;
    for (let i = 0; i < selectedRooms.length; i++) {
      if (i === selectedRooms.length - 1) roomToJoin = selectedRooms[i];
      currentUser.joinRoom({ roomId: selectedRooms[i] }).then(room => {
        console.log(`Joined room with ID: ${room.id}`);
      });
    }
    // subscribes to latest room clicked, refreshes joinable rooms,
    // resets search parameters in component, resets modal back to creating and hides it
    joinRoom(roomToJoin);
    refreshJoinableRooms();
    this.resetRooms();
    handleCreateClick();
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
