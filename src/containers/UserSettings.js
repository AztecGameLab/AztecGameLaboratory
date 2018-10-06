import React, { Component } from "react";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";

import { isLoggedIn } from "../redux/selectors";

class UserSettings extends Component {
  state = {
    avatar: null,
    username: null,
    deleteAccount: null
  };

  handleAvatar = e => {
    this.setState({
      avatar: URL.createObjectURL(e.target.files[0])
    });
  };

  handleUsername = e => {
    e.preventDefault();
    this.props.firebase.updateProfile({ displayName: this.state.username });
    console.log("Username is now: " + this.state.username);
  };

  handleDeleteAccount = e => {
    // this.props.firebase.delete();
    console.log("Account deleted.");
  };

  test = e => {
    console.log(this.props);
  };

  handleChange = e => {
    this.setState({
      // Get the direct value based on id (check inputs)
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            {/* PROFILE SETTINGS */}
            <h1>PROFILE</h1>

            {/* AVATAR */}
            <h2>Avatar</h2>
            <form onSubmit={this.handleUpdateProfile}>
              <input type="file" onChange={this.handleAvatar} />
              <img src={this.state.avatar} alt="" />
            </form>

            {/* ACCOUNT SETTINGS */}
            <h1>ACCOUNT</h1>

            {/* CHANGE USERNAME */}
            <h2>Change username</h2>
            <form
              onSubmit={e => {
                if (window.confirm("Are you sure?")) this.handleUsername(e);
              }}
            >
              <input type="text" id="username" onChange={this.handleChange} />
              <button>Change username</button>
            </form>

            {/* DELETE ACCOUNT */}
            <h2>Delete account</h2>
            <p>Once you delete your account, there is no going back. Please be certain. </p>
            <button
              id="deleteAccount"
              onClick={e => {
                if (window.confirm("Are you sure?")) this.handleDeleteAccount(e);
              }}
            >
              Delete your account
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: isLoggedIn(state),
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(withFirebase(UserSettings));
