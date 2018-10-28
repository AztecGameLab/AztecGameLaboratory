import React, { Component } from "react";
import styles from "./chat.module.css";
import cx from "classnames";
import CreateWindow from "./CreateWindow";
import JoinWindow from "./JoinWindow";

class CreateJoinModal extends Component {
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
    const { isCJModalOpen, hideCJModal, joinRoom } = this.props;
    const { creating, joining } = this.state;

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
          <ToggleModal creating={creating} joining={joining} joinRoom={joinRoom} />
        </section>
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

export default CreateJoinModal;
