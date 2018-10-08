import React, { Component } from "react";
import { connect } from "react-redux";
import { getChatUserObj } from "../../redux/selectors";

class JoinWindow extends Component {
  render() {
    const { user } = this.props;
    console.log(user);
    return <p>Join Window</p>;
  }
}

const mapStateToProps = state => {
  return {
    user: getChatUserObj(state)
  };
};

export default connect(mapStateToProps)(JoinWindow);
