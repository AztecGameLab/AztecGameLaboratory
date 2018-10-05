import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Thumbnail from "../../sharedComponents/Thumbnail";
import Avatar from "../../sharedComponents/Avatar";

class GameGrid extends Component {
  renderGames = games => {
    return Object.keys(games).map(gameID => {
      const { displayName, photoURL } = games[gameID].owner;
      return (
        <div key={gameID}>
          <h1>{games[gameID].title}</h1>
          <h3>from {displayName}</h3>
          <Avatar url={photoURL} />
          <p>{games[gameID].description}</p>
          <Thumbnail url={games[gameID].thumbnail} />
          <br />
        </div>
      );
    });
  };

  render() {
    const { games } = this.props;
    return <div>{games ? this.renderGames(games) : "hi"}</div>;
  }
}

const mapStateToProps = state => {
  return {
    games: state.firestore.data.games
  };
};

export default compose(
  firestoreConnect(["games"]),
  connect(mapStateToProps)
)(GameGrid);
