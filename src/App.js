import React, { Component } from "react";
import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";
import MainPanel from "./containers/MainPanel";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <MainPanel />
        </div>
      </div>
    );
  }
}

export default App;
