import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Thumbnail from "../common/Thumbnail";
import Avatar from "../common/Avatar";

class ArtGrid extends Component {
  renderArtwork = art => {
    return Object.keys(art).map(artID => {
      const { displayName, photoURL } = art[artID].owner;
      return (
        <div key={artID}>
          <h1>{art[artID].title}</h1>
          <h3>from {displayName}</h3>
          <Avatar url={photoURL} />
          <p>{art[artID].description}</p>
          <Thumbnail url={art[artID].url} />
          <br />
        </div>
      );
    });
  };

  render() {
    const { art } = this.props;
    return <div>{art ? this.renderArtwork(art) : "loading..."}</div>;
  }
}

const mapStateToProps = state => {
  return {
    art: state.firestore.data.art
  };
};

export default compose(
  firestoreConnect(["art"]),
  connect(mapStateToProps)
)(ArtGrid);
