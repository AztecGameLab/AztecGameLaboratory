import React, { Component } from "react";

class Thumbnail extends Component {
  render() {
    const { url } = this.props;

    return <img src={url} alt="" style={{ height: 100, width: 100 }} />;
  }
}

export default Thumbnail;
