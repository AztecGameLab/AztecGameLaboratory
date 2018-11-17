import React, { Component } from "react";
import { connect } from "react-redux";

import { isLoggedIn } from "../redux/selectors";
import { createArtPost } from "../redux/actions/createArtPostActions";
class CreatePost extends Component {
  state = {
    title: "",
    description: "",
    url: ""
  };

  form = {
    artForm: false,
    gameForm: true,
    musicForm: false
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    // Returns to the home page after creating a project
    // Check which state is active then post correctly
    // this.props.createArtPost(this.state);
    this.props.history.push("/");
  };

  handleArtForm() {
    this.setState({
      artForm: true,
      gameForm: false,
      musicForm: false
    });
    console.log(this.form);
  }

  handleGameForm() {
    this.setState({
      artForm: false,
      gameForm: true,
      musicForm: false
    });
    console.log(this.form);
  }

  handleMusicForm() {
    this.setState({
      artForm: false,
      gameForm: false,
      musicForm: true
    });
    console.log(this.form);
  }

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
              {this.form.artForm ? (
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
              {this.form.gameForm ? (
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
              {this.form.musicForm ? (
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
