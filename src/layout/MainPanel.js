import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import GameGrid from "../games/GameGrid";
import ArtGrid from "../art/ArtGrid";
import HomePage from "../home/Home";
import UserSettings from "../user/UserSettings";

class MainPanel extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/games" component={GameGrid} />
        <Route path="/art" component={ArtGrid} />
        <Route path="/settings" component={UserSettings} />
      </Switch>
    );
  }
}

export default MainPanel;
