/* Main container for modal content
   - Create modal allows user to fill out fields necessary to create a room
   - Join modal displays a list of joinable rooms retrieved when modal is opened,
     and contains a search bar feature to filter rooms
*/
import React, { Component } from "react";
import CreateWindow from "./CreateWindow";
import JoinWindow from "./JoinWindow";

class CreateJoinContainer extends Component {
  state = {
    creating: false,
    joining: false
  };

  handleCreateClick = () => {
    this.setState({ creating: true, joining: false });
  };

  handleJoinClick = () => {
    this.setState({ creating: false, joining: true });
  };

  render() {
    const { creating, joining } = this.state;
    const { joinRoom } = this.props;
    return (
      <div>
        <button onClick={this.handleCreateClick}>Create</button>
        <p>or</p>
        <button onClick={this.handleJoinClick}>Join</button>
        <ToggleModal creating={creating} joining={joining} joinRoom={joinRoom} />
      </div>
    );
  }
}

function ToggleModal(props) {
  const { creating, joining, joinRoom } = props;
  if (creating) return <CreateWindow />;
  if (joining) return <JoinWindow joinRoom={joinRoom} />;
  return <p>Click an option!</p>;
}

export default CreateJoinContainer;
