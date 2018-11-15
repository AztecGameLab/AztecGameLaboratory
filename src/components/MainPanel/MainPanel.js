import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import GameGrid from "../Games/GameGrid";
import ArtGrid from "../Art/ArtGrid";
import HomePage from "../Home/Home";
import UserSettings from "../../containers/UserSettings";
import CreatePost from "../../containers/CreatePost";

class MainPanel extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/games" component={GameGrid} />
        <Route path="/art" component={ArtGrid} />
        <Route path="/settings" component={UserSettings} />
        <Route path="/createpost" component={CreatePost} />
      </Switch>
    );
  }
}

export default MainPanel;
