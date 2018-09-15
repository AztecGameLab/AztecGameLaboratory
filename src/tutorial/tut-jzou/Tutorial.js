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
        <button onClick={this.props.jinAction}>My Action</button>
        <button onClick={this.props.jinAction2}>cmonBruh</button>
      </React.Fragment>
    );
  }
}

const FunctComp = () => {
  return <p>Bottom Text</p>;
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
