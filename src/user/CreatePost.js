import React, { Component } from "react";
import { connect } from "react-redux";

import { isLoggedIn } from "../redux/auth/authSelectors";
import { createArtPost } from "../redux/submission/submissionActions";

class CreatePost extends Component {
  // Forms to fill to be passed on to
  // need to update actions to obtain the correct data
  state = {
    view: "game",
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
    // TO DO:
    // Check which state is active then post correctly
    // this.props.createArtPost(this.state);
    // Returns to the home page after creating a project
    this.props.history.push("/");
  };

  // what we can do here is reference the id instead of 3 different functions

  handleArtForm = e => {
    this.setState({
      view: "art"
    });
    console.log("Art");
  };

  handleGameForm = e => {
    this.setState({
      view: "game"
    });
    console.log("Game");
  };

  handleMusicForm = e => {
    this.setState({
      view: "music"
    });
    console.log("Music");
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            <div>
              <button id="artForm" onClick={this.handleArtForm}>
                ART
              </button>
              <button id="gameForm" onClick={this.handleGameForm}>
                GAME
              </button>
              <button id="musicForm" onClick={this.handleMusicForm}>
                MUSIC
              </button>
            </div>

            <form onSubmit={this.handleSubmit}>
              {this.state.view === "art" ? (
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
              ) : null}
              {this.state.view === "game" ? (
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
              ) : null}
              {this.state.view === "music" ? (
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
              ) : null}
            </form>
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

const mapDispatchToProps = dispatch => {
  return {
    createArtPost: art => dispatch(createArtPost(art))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
