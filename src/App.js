import React, { Component } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainPanel from "./components/MainPanel/MainPanel";

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
