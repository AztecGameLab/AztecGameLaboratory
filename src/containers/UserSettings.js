import React, { Component } from "react";
import { connect } from "react-redux";
import { isLoggedIn } from "../redux/selectors";

class UserSettings extends Component {
  state = {
    avatar: null,
    bio: null,
    username: null,
    oldPassword: null,
    newPassword: null,
    deleteAccount: null
  };

  handleAvatar = e => {
    this.setState({
      avatar: URL.createObjectURL(e.target.files[0])
    });
  };

  handleUpdateProfile = e => {
    e.preventDefault();
    console.log("Profile updated.");
  };

  handleDeleteAccount = e => {
    console.log("Account deleted.");
  };

  handlePassword = e => {
    e.preventDefault();
    console.log("Password updated.");
  };

  handleUsername = e => {
    console.log("Username changed.");
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            <h1>PROFILE</h1>
            {/* onSubmit vs onClick? */}
            {/* Are we handling the avatar itself, can we call on firebase api? */}
            <form onSubmit={this.handleUpdateProfile}>
              <label htmlFor="avatar">Avatar</label>
              {/* How to check if it's a valid picture format */}
              <input type="file" onChange={this.handleAvatar} />
              <img src={this.state.avatar} alt="" />
              <label htmlFor="bio">Bio:</label>
              <input type="text" id="bio" />
              <button>Update profile</button>
            </form>
            <h1>ACCOUNT</h1>
            <h2>Change password</h2>
            <form onSubmit={this.handlePassword}>
              <label htmlFor="oldPassword">Old Password:</label>
              <input type="text" id="oldPassword" onChange={this.handleChange} />
              <br />
              <label htmlFor="newPassword">New Password:</label>
              <input type="text" id="newPassword" onChange={this.handleChange} />
              <br />
              <button>Update password</button>
            </form>
            <h2>Change username</h2>
            <button
              id="username"
              onClick={e => {
                if (window.confirm("Are you sure?")) this.handleUsername(e);
              }}
            >
              Change username
            </button>
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
    isLoggedIn: isLoggedIn(state)
  };
};

export default connect(mapStateToProps)(UserSettings);
