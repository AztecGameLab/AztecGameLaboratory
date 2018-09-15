import React, { Component } from "react";
import { FunctionalComponent } from "../tut-kdo/Tutorial";

class ACDeLeonTutorial extends Component {
  state = {
    count: 0
  };

  onClickHandleCount = e => {
    this.setState({
      count: (this.state.count += 1)
    });
  };

  render() {
    return (
      <React.Fragment>
        <FunctionalComponent />>
        <button onClick={this.onClickHandleCount}>
          Click on me to increase the count!
        </button>
        Count: {this.state.count}
      </React.Fragment>
    );
  }
}

const FunctionalComponent = () => {
  return <h1>Hi, I'm a functional component!</h1>;
};

export default ACDeLeonTutorial;
