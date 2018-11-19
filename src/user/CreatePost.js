import React, { Component } from "react";
import { connect } from "react-redux";

import { isLoggedIn } from "../redux/auth/authSelectors";
import { createPost } from "../redux/submission/submissionActions";

class CreatePost extends Component {
  state = {
    // Default is "games"
    payload: "games",
    title: "",
    description: "",
    url: ""
  };

  handleChange = e => {
    // Checks user input by each character
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.createPost(this.state);
    // Returns to the home page after creating a post
    this.props.history.push("/");
  };

  // Is it an art post, game post, or music post?
  handlePayloadChange = e => {
    this.setState({
      payload: e.target.id
    });
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            {/* Header for the buttons */}
            <div>
              <button id="art" onClick={this.handlePayloadChange}>
                ART
              </button>
              <button id="games" onClick={this.handlePayloadChange}>
                GAME
              </button>
              <button id="music" onClick={this.handlePayloadChange}>
                MUSIC
              </button>
            </div>

            {/* Kept the separate forms just incase different values are needed */}
            {this.state.payload === "art" ? (
              <form onSubmit={this.handleSubmit}>
                <div>
                  <h1>CREATE ART</h1>
                  <h2>TITLE</h2>
                  <input type="text" id="title" onChange={this.handleChange} />
                  <h2>DESCRIPTION</h2>
                  <textarea id="description" onChange={this.handleChange} />
                  <h2>URL</h2>
                  <input type="text" id="url" onChange={this.handleChange} />
                  <div>
                    <button>Share your creation!</button>
                  </div>
                </div>
              </form>
            ) : null}

            {this.state.payload === "games" ? (
              <form onSubmit={this.handleSubmit}>
                <div>
                  <h1>CREATE GAME</h1>
                  <h2>TITLE</h2>
                  <input type="text" id="title" onChange={this.handleChange} />
                  <h2>DESCRIPTION</h2>
                  <textarea id="description" onChange={this.handleChange} />
                  <h2>URL</h2>
                  <input type="text" id="url" onChange={this.handleChange} />
                  <div>
                    <button>Share your creation!</button>
                  </div>
                </div>
              </form>
            ) : null}
            {this.state.payload === "music" ? (
              <form onSubmit={this.handleSubmit}>
                <div>
                  <h1>CREATE MUSIC</h1>
                  <h2>TITLE</h2>
                  <input type="text" id="title" onChange={this.handleChange} />
                  <h2>DESCRIPTION</h2>
                  <textarea id="description" onChange={this.handleChange} />
                  <h2>URL</h2>
                  <input type="text" id="url" onChange={this.handleChange} />
                  <div>
                    <button>Share your creation!</button>
                  </div>
                </div>
              </form>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

// Used to check if the user is logged in
const mapStateToProps = state => {
  return {
    isLoggedIn: isLoggedIn(state)
  };
};

// Used to speak with the backend
const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

// Connects the functions
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
