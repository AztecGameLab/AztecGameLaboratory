import React, { Component } from "react";
import { connect } from "react-redux";
import { selectTestData } from "../../redux/testSelector";
import { bindActionCreators } from "redux";
import { testAction, kevinAction, acAction } from "../../redux/testActions";
import Counter from "./Counter";

class ACDeLeonTutorial extends Component {
  render() {
    return (
      <React.Fragment>
        <FunctionalComponent />
        <p>Redux Data: {this.props.testData.test}</p>
        <Counter />
        <button onClick={this.props.testAction}>
          Click me to run testAction!
        </button>
        <button onClick={this.props.kevinAction}>
          Click me to run kevinAction!
        </button>
        <button onClick={this.props.acAction}>Click me to run acAction!</button>
      </React.Fragment>
    );
  }
}

const FunctionalComponent = () => {
  return <h1>Hi, I'm a functional component!</h1>;
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
      kevinAction,
      acAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ACDeLeonTutorial);
