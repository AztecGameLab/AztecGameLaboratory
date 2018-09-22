import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Welcome to Aztec Game Lab</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/games"}>Games</Link>
        <Link to={"/art"}>Art</Link>
        <Link to={"/music"}>Music</Link>
      </header>
    );
  }
}

const HeaderDropDown = () => {
  return <p> you are logged in as: </p>;
};

export default Header;
