import React, { Component } from "react";
import "./Chatkit.css";
import CreateWindow from "./CreateWindow";
import JoinWindow from "./JoinWindow";

class CreateJoinModal extends Component {
  state = {
    creating: true
  };

  handleCreateClick = () => {
    this.setState({ creating: true });
  };

  handleJoinClick = () => {
    this.setState({ creating: false });
  };

  render() {
    const { hideCJModal, joinRoom, currentUser, refreshJoinableRooms } = this.props;
    const { creating } = this.state;

    return (
      <React.Fragment>
        <section>
          <button onClick={hideCJModal}>Close</button>
          <button onClick={this.handleCreateClick}>Create</button>
          <button onClick={this.handleJoinClick}>Join</button>
          {creating ? (
            <CreateWindow
              creating={creating}
              joinRoom={joinRoom}
              currentUser={currentUser}
              hideCJModal={hideCJModal}
            />
          ) : (
            <JoinWindow
              creating={creating}
              joinRoom={joinRoom}
              currentUser={currentUser}
              hideCJModal={hideCJModal}
              refreshJoinableRooms={refreshJoinableRooms}
              handleCreateClick={this.handleCreateClick}
            />
          )}
        </section>
      </React.Fragment>
    );
  }
}

export default CreateJoinModal;
