import React, { Component } from "react";

class CreateJoinButton extends Component {
  render() {
    const { showCJModal } = this.props;
    return <button onClick={showCJModal}>Create or Join</button>;
  }
}

export default CreateJoinButton;
