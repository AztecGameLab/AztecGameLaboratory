import React, { Component } from "react";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";
import { isLoggedIn, getUserUID } from "../redux/auth/authSelectors";

class UserSettings extends Component {
  // These states keep the user input and translate it into Firebase
  state = {
    newAvatar: "",
    newUsername: ""
  };

  handleAvatar = e => {
    const { newAvatar } = this.state;
    if (window.confirm("Are you sure you want to change your profile picture?")) {
      e.preventDefault();
      this.props.firebase.updateProfile({ photoURL: newAvatar });
      this.updateChatKitAccount();
    }
  };

  handleUsername = e => {
    const { newUsername } = this.state;
    if (window.confirm("Are you sure you want to change your username?")) {
      e.preventDefault();
      this.props.firebase.updateProfile({ displayName: newUsername });
      this.updateChatKitAccount();
    }
  };

  updateChatKitAccount = async () => {
    const { newUsername, newAvatar } = this.state;
    const { uid } = this.props;
    const { displayName, photoURL } = this.props.profile;
    const chatkitResponse = await fetch(
      "https://us-central1-aztec-game-laboratory.cloudfunctions.net/updateChatkitAccount",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
          id: uid,
          name: newUsername ? newUsername : displayName,
          avatar_url: newAvatar ? newAvatar : photoURL
        })
      }
    );
    const content = await chatkitResponse.json();
    console.log("From firebase:", content);
  };

  handleChange = e => {
    this.setState({
      // id is within the input method in the return()
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { isLoggedIn } = this.props;
    const { displayName, email, exp, photoURL, role } = this.props.profile;
    return (
      <div>
        {isLoggedIn ? (
          <div>
            {/* PROFILE SETTINGS */}
            <h1>PROFILE</h1>

            {/* CURRENT AVATAR */}
            <img src={photoURL} alt="" height="300" width="300" />

            {/* CURRENT SETTINGS PROTOTYPING */}
            <p>
              Name: {displayName}
              <br />
              Email: {email}
              <br />
              EXP: {exp}
              <br />
              PhotoURL: {photoURL}
              <br />
              Role: {role}
              <br />
            </p>

            {/* AVATAR */}
            <h2>Change avatar (URL)</h2>
            <form onSubmit={this.handleAvatar}>
              <input type="text" id="newAvatar" onChange={this.handleChange} />
              <button>Change picture</button>
            </form>

            {/* ACCOUNT SETTINGS */}
            <h1>ACCOUNT</h1>

            {/* CHANGE USERNAME */}
            <h2>Change username</h2>
            <form onSubmit={this.handleUsername}>
              <input
                type="text"
                id="newUsername"
                onChange={this.handleChange}
                value={this.state.newUsername}
              />
              <button type="submit">Change username</button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: isLoggedIn(state),
    uid: getUserUID(state),
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(withFirebase(UserSettings));
