import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "./Counter";
import { selectTestData } from "../../redux/testSelector";
import { bindActionCreators } from "redux";
import { testAction, justinAction } from "../../redux/testActions";

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
        <FunctionalComponent />
        {this.props.name}
        {this.props.testData.test}
        <Counter />
        <button onClick={this.onClickHandleMood}>
          Click me to change my mood
        </button>
        <p>Mood: {this.state.mood}</p>
        <button onClick={this.props.justinAction}>
          Click to run Justin's test action!
        </button>
        <FunctionalComponent2 />
      </React.Fragment>
    );
  }
}
export const FunctionalComponent = () => {
  return <h1> This is a functional Component</h1>;
};
export const FunctionalComponent2 = () => {
  return <h2> This is also a functional Component</h2>;
};
const mapStateToProps = state => {
  return {
    testData: selectTestData(state)
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      testAction,
      justinAction
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JustinRabeTutorial);
