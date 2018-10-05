import React, { Component } from "react";

class Avatar extends Component {
  render() {
    const { url } = this.props;

    return <img src={url} alt="" style={{ height: 50, width: 50 }} />;
  }
}

export default Avatar;
