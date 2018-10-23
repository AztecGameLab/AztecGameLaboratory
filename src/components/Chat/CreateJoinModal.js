import React, { Component } from "react";
import styles from "./chat.module.css";
import cx from "classnames";
import CreateJoinContainer from "./CreateJoinContainer";

class CreateJoinModal extends Component {
  render() {
    const { isCJModalOpen, hideCJModal, joinRoom } = this.props;

    // Use classnames library to parse CSS classes
    let showHideClassName = cx(styles.modal, {
      [styles["display-block"]]: isCJModalOpen,
      [styles["display-none"]]: !isCJModalOpen
    });

    return (
      <div className={showHideClassName}>
        <section className={styles["modal-main"]}>
          <button onClick={hideCJModal}>Close</button>
          <CreateJoinContainer joinRoom={joinRoom} />
        </section>
      </div>
    );
  }
}

export default CreateJoinModal;
