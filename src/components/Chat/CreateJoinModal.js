import React, { Component } from "react";
import styles from "./chat.module.css";
import cx from "classnames";
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
    const { isCJModalOpen, hideCJModal, joinRoom, currentUser } = this.props;
    const { creating } = this.state;

    // Use classnames library to parse CSS classes
    let showHideClassName = cx(styles.modal, {
      [styles["display-block"]]: isCJModalOpen,
      [styles["display-none"]]: !isCJModalOpen
    });

    return (
      <div ref={this.setWrapperRef} className={showHideClassName}>
        <section className={styles["modal-main"]}>
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
            />
          )}
        </section>
      </div>
    );
  }
}

export default CreateJoinModal;
