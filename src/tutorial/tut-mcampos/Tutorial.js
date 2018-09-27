import React, { Component } from "react";
import { connect } from "react-redux";
import { selectTestData } from "../../redux/testSelector";
import { bindActionCreators } from "redux";
import { testAction, miguelAction } from "../../redux/testActions";
import Counter from "./Counter";

class MiguelDoTutorial extends Component {
  render() {
    return (
      <React.Fragment>
        <FunctionalComponent />
        <p>Redux Data: {this.props.testData.test} </p>
        <Counter />
        <button onClick={this.props.testAction}>
          {" "}
          Click me to run a Test Action!{" "}
        </button>
        <button onClick={this.props.miguelAction}>
          {" "}
          Click me to run Miguel's Action!{" "}
        </button>
      </React.Fragment>
    );
  }
}

const FunctionalComponent = () => {
  return <h1>This is a FunctionalComponent</h1>;
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
      miguelAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiguelDoTutorial);
