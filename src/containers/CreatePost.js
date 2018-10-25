import React, { Component } from "react";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";

import { isLoggedIn } from "../redux/selectors";
class UserSettings extends Component {
  render() {
    const { isLoggedIn } = this.props;

    return <div>{isLoggedIn ? <div>CREATE POST</div> : null}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: isLoggedIn(state)
  };
};

export default connect(mapStateToProps)(withFirebase(UserSettings));
