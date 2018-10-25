import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "react-redux-firebase";
import { connect } from "react-redux";
import { isLoggedIn } from "../redux/selectors";

class Header extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <header>
        <h1>Welcome to Aztec Game Lab</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/games"}>Games</Link>
        <Link to={"/art"}>Art</Link>
        <Link to={"/music"}>Music</Link>
        {isLoggedIn ? <Link to={"/settings"}>Settings</Link> : null}
        {isLoggedIn ? <Link to={"/createpost"}>CREATE POST</Link> : null}
        <button onClick={() => this.props.firebase.logout()}>Sign Out</button>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: isLoggedIn(state)
  };
};

export default connect(mapStateToProps)(withFirebase(Header));
