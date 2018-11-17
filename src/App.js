import React, { Component } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import MainPanel from "./layout/MainPanel";

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
