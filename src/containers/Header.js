import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "react-redux-firebase";
class Header extends Component {
  render() {
    return (
      <header>
        <h1>Welcome to Aztec Game Lab</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/games"}>Games</Link>
        <Link to={"/art"}>Art</Link>
        <Link to={"/music"}>Music</Link>
        <button onClick={() => this.props.firebase.logout()}>Sign Out</button>
      </header>
    );
  }
}

export default withFirebase(Header);
