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
    return (
      <div>
        <button onClick={this.handleCreateClick}>Create</button>
        <p>or</p>
        <button onClick={this.handleJoinClick}>Join</button>
        <ToggleModal creating={creating} joining={joining} />
      </div>
    );
  }
}

function ToggleModal(props) {
  const { creating, joining } = props;
  if (creating) return <CreateWindow />;
  if (joining) return <JoinWindow />;
  return <p>Click an option!</p>;
}

export default CreateJoinContainer;
