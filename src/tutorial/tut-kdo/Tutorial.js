import React, { Component } from "react";
import { connect } from "react-redux";
import { selectTestData } from "../../redux/testSelector";
import { bindActionCreators } from "redux";

import { testAction, kevinAction } from "../../redux/testActions";

class KevinDoTutorial extends Component {
    state = {
        count: 0
    };

    onClickHandleCount = e => {
        const lastCount = this.state.count;
        this.setState({
            count: lastCount + 1
        });
    };

    render() {
        return (
            <React.Fragment>
                <FunctionalComponent />
                <p>Redux Data: {this.props.testData.test}</p>
                <button onClick={this.onClickHandleCount}>Click me to increase count!</button>
                <p>Count: {this.state.count}</p>
                <button onClick={this.props.testAction}>Click me to run testAction!</button>
                <button onClick={this.props.kevinAction}>Click me to run kevinAction!</button>
            </React.Fragment>
        );
    }
}

export const FunctionalComponent = () => {
    return <h1> Hi I am a FunctionalComponent</h1>;
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
            kevinAction
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KevinDoTutorial);