import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import GameGrid from "./GameGrid";
import ArtGrid from "./ArtGrid";
import HomePage from "./HomePage";
import UserSettings from "./UserSettings";

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
