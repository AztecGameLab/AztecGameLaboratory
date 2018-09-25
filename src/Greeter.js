import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
//import firebase from "./Firebase";

class Greeter extends Component {
  render() {
    console.log(this.props);
    return <Greeting profile={this.props.profile} />;
  }
}

function Greeting(profile) {
  if (profile) {
    return <h3>Hello, {profile.profile.displayName}!</h3>;
  }
  return <h3>Please Login:</h3>;
}

const mapStateToProps = state => {
  return {
    games: state.firestore.data.games,
    profile: state.firebase.profile, // pass profile data as this.props.profile
    auth: state.firebase.auth // pass auth data as this.props.auth
  };
};

// listener for users collection
export default compose(
  firestoreConnect(["games"]),
  connect(mapStateToProps)
)(Greeter);
