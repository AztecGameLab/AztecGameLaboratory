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

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    // Returns to the home page after creating a project
    this.props.createArtPost(this.state);
    this.props.history.push("/");
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            {/* CHANGE TO PROVIDE MORE OPTIONS RATHER THAN ART */}
            <h1>CREATE ART</h1>
            <form onSubmit={this.handleSubmit}>
              <h2>TITLE</h2>
              <input type="text" id="title" onChange={this.handleChange} />
              <h2>DESCRIPTION</h2>
              <textarea id="description" onChange={this.handleChange} />
              <h2>URL</h2>
              <input type="text" id="url" onChange={this.handleChange} />
              <div>
                <button>Share your creation!</button>
              </div>
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
