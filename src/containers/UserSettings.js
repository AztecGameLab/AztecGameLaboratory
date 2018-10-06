import React, { Component } from "react";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";

import { isLoggedIn } from "../redux/selectors";
class UserSettings extends Component {
  state = {
    avatar: null,
    username: null
    // deleteAccount: null
  };

  handleAvatar = e => {
    e.preventDefault();
    this.props.firebase.updateProfile({ photoURL: this.state.avatar });
    e.target.reset();
  };

  handlePreAvatar = e => {
    // this.setState({
    //   avatar: URL.createObjectURL(e.target.files[0])
    // });
  };

  handleUsername = e => {
    e.preventDefault();
    this.props.firebase.updateProfile({ displayName: this.state.username });
    e.target.reset();
  };

  handleDeleteAccount = e => {
    console.log(this.props.firebase);

    // Need to be able to delete account from auth & database
    // this.props.firebase.delete() does not work alongside re-auth-ing user

    console.log("End of function.");
  };

  handleChange = e => {
    this.setState({
      // id is within the input method
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

            {/* CURRENT AVATAR */}
            <img src={this.props.profile.photoURL} alt="" height="300" width="300" />

            {/* CURRENT SETTINGS */}
            <p>
              Name: {this.props.profile.displayName}
              <br />
              Email: {this.props.profile.email}
              <br />
              EXP: {this.props.profile.exp}
              <br />
              PhotoURL: {this.props.profile.photoURL}
              <br />
              Role: {this.props.profile.role}
              <br />
            </p>

            {/* AVATAR */}
            <h2>Change avatar (URL)</h2>
            <form onSubmit={this.handleAvatar}>
              <input type="text" id="avatar" onChange={this.handleChange} />
              {/* <img src={this.state.avatar} alt="" /> */}
              <button>Change picture</button>
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
            {/* <h2>Delete account</h2>
            <p>Once you delete your account, there is no going back. Please be certain. </p>
            <button
              onClick={e => {
                if (window.confirm("Are you sure?")) this.handleDeleteAccount(e);
              }}
            >
              Delete your account
            </button> */}
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
