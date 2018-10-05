import React, { Component } from "react";
import { connect } from "react-redux";
import { isLoggedIn } from "../redux/selectors";

class UserSettings extends Component {
  state = {
    avatar: null,
    username: null,
    oldPassword: null,
    newPassword: null,
    destroyAccount: null
  };

  handleChange = e => {
    // console.log(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Changes saved!");
  };

  handleDestroy = e => {
    console.log("ACCOUNT DESTROYED!");
  };

  handleUpload = e => {
    console.log("Changing avatar...");
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            <h1>USER SETTINGS</h1>
            {/* Are we handling the avatar itself, can we call on firebase api? */}
            <label htmlFor="avatar">Change avatar:</label>
            <button id="avatar" onClick={this.handleUpload}>
              Upload new avatar!
            </button>
            <br />
            {/* onSubmit vs onClick? */}
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" onChange={this.handleChange} />
              <br />
              <label htmlFor="oldPassword">Old Password::</label>
              <input type="text" id="oldPassword" onChange={this.handleChange} />
              <br />
              <label htmlFor="newPassword">New Password:</label>
              <input type="text" id="newPassword" onChange={this.handleChange} />
              <br />
              <button>Save changes!</button>
            </form>
            <label htmlFor="destroyAccount">Destroy Account?</label>
            <button id="destroyAccount" onClick={this.handleDestroy}>
              DESTROY!
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
