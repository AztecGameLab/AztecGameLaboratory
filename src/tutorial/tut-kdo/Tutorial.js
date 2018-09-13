import React, { Component } from "react";

class KevinDoTutorial extends Component {
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
                <FunctionalComponent />
                <button onClick={this.onClickHandleCount}>Click me to increase count!</button>
            </React.Fragment>
        );
    }
}

const FunctionalComponent = () => {
    return <h1> Hi I am a FunctionalComponent</h1>;
};

export default KevinDoTutorial;
