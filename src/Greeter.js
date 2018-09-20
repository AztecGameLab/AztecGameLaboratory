import React, { Component } from "react";
//import { selectCurUsername } from "./redux/testSelector";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
//import firebase from "./Firebase";
//import { watchEvents, unWatchEvents } from "./actions/query";
//import { getEventsFromInput, createCallable } from "./utils";

class Greeter extends Component {
  render() {
    return (
      <React.Fragment>
        <Greeting profile={this.props.profile} />
      </React.Fragment>
    );
  }
}

function Greeting(profile) {
  if (profile) {
    return <h3>Hello, {profile.profile.displayName}!</h3>;
  }
  return <h3>Please Login:</h3>;
}

// listener for users collection
export default compose(
  firestoreConnect(["users"]), // sync users collection from Firestore into redux
  connect(state => ({
    userList: state.firestore.data.users,
    profile: state.firebase.profile // pass profile data as this.props.profile
    //auth: state.firebase.auth // pass auth data as this.props.auth
  }))
)(Greeter);
