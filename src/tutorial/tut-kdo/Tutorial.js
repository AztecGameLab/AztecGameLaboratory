import React, { Component } from "react";
import { connect } from "react-redux";

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
                <button onClick={this.onClickHandleCount}>Click me to increase count!</button>
                <p>Count: {this.state.count}</p>
            </React.Fragment>
        );
    }
}

const FunctionalComponent = () => {
    return <h1> Hi I am a FunctionalComponent</h1>;
};

export default KevinDoTutorial;
