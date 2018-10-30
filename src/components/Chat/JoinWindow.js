// Join room content container for modal
// TODO: Join rooms at once by allowing user to check multiple rooms to join

import React, { Component } from "react";
import { connect } from "react-redux";
import { getJoinableRooms } from "../../redux/selectors";
import RoomList from "./RoomList";

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
      filteredRooms: joinableRooms
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

  addToSelected = room => {
    var selectedRooms = this.state.selectedRooms;
    selectedRooms = selectedRooms.push(room);
    this.setState({ selectedRooms });
  };

  render() {
    const { joinRoom } = this.props;
    const { filteredRooms } = this.state;
    return (
      <div>
        <p>Join Window</p>
        <input type="text" placeholder="Search for Rooms!" onChange={this.filterRooms} />
        <RoomList joinRoom={joinRoom} rooms={filteredRooms} addToSelected={this.addToSelected} />
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
