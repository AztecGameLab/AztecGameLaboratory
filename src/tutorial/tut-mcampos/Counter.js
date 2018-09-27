import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  onClickHandleCount = e => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.onClickHandleCount}>Gold +1</button>
        <p>Count: {this.state.count}</p>
      </React.Fragment>
    );
  }
}

export default Counter;
