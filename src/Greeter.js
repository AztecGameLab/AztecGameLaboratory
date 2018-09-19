import React, { Component } from "react";
//import { selectCurUsername } from "./redux/testSelector";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
//import { watchEvents, unWatchEvents } from "./actions/query";
//import { getEventsFromInput, createCallable } from "./utils";

class Greeter extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Hello, {this.props.profile.displayName} !</p>
      </React.Fragment>
    );
  }
}

// listener for users collection
export default compose(
  firestoreConnect(["users"]), // sync users collection from Firestore into redux
  connect(state => ({
    userList: state.firestore.data.users,
    profile: state.firestore.profile, // pass profile data as this.props.profile
    auth: state.firestore.auth // pass auth data as this.props.auth
  }))
)(Greeter);
