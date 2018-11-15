import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "../../firebaseConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import ChatContainer from "../Chat/ChatContainer";
import { isLoggedIn } from "../../redux/selectors";
import "./Sidebar.css";

// Configure FirebaseUI
let uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

class Sidebar extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="sidebar">
        {isLoggedIn ? (
          <ChatContainer />
        ) : (
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: isLoggedIn(state)
  };
};

export default connect(mapStateToProps)(Sidebar);
