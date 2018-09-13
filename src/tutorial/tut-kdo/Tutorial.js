import React, { Component } from "react";
import { connect } from "react-redux";
import { selectTestData } from "../../redux/testSelector";

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
            </React.Fragment>
        );
    }
}

const FunctionalComponent = () => {
    return <h1> Hi I am a FunctionalComponent</h1>;
};

const mapStateToProps = state => {
    return {
        testData: selectTestData(state)
    };
};

export default connect(mapStateToProps)(KevinDoTutorial);
