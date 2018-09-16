import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "./Counter";
import { selectTestData } from "../../redux/testSelector";
import { bindActionCreators } from "redux";
import { jinAction, jinAction2 } from "../../redux/testActions";
class JinZouTutorial extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Redux Data: {this.props.testData.test}</p>
        <Counter />
        <FunctComp />
        <button onClick={this.props.jinAction}>Redux Action 1</button> 
        <button onClick={this.props.jinAction2}>Redux Action 2</button>
      </React.Fragment>
    );
  }
}

const FunctComp = () => {
  return <p>Functional Component Rendered</p>;
};

const mapStateToProps = state => {
  return {
    testData: selectTestData(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      jinAction,
      jinAction2
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JinZouTutorial);
