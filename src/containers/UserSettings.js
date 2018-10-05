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

  handleUsername = e => {
    console.log("Username changed.");
  };

  handleDeleteAccount = e => {
    console.log("Account deleted.");
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            <h1>PROFILE</h1>
            <form onSubmit={this.handleUpdateProfile}>
              <label htmlFor="avatar">Avatar</label>
              <input type="file" onChange={this.handleAvatar} />
              <img src={this.state.avatar} alt="" />
            </form>
            <h1>ACCOUNT</h1>
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
