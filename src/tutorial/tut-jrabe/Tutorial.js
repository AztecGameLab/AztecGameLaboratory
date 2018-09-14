import React, { Component } from "react";
class JustinRabeTutorial extends Component {
  state = {
    mood: "Happy"
  };
  onClickHandleMood = e => {
    const lastMood = this.state.mood;
    if (lastMood === "Happy") {
      this.setState({
        mood: "Sad"
      });
    } else {
      this.setState({
        mood: "Happy"
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={this.onClickHandleMood}>
          Click me to change my mood
        </button>
        <p>Mood: {this.state.mood}</p>
      </React.Fragment>
    );
  }
}
export default JustinRabeTutorial;
