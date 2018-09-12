require('dotenv').config()

// To use dotenv, EVERYONE_SEES_THIS_KEY = process.env.THIS_KEY_IS_HIDDEN

import React, { Component } from "react";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
