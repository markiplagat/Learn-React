// Sending data back to the parent
import React from 'react';

class Child extends React.Component {
    constructer(props) {
        super(props);
        this.state = { count: 0 };

        this.outputEvent = this.outputEvent.bind(this);
    }
    outputEvent(event) {
        // event context comes from the Child
        this.setState({ count: this.state.count++ });
    }
    
    render() {
        const varible = 5;
        return (
            <div>
                Count: { this.state.count }
                <Child clickHandler={this.outputEvent} />
            </div>
        );
    }
}

class Child extends React.Component {
    render() {
        return (
            <button onClick={this.props.clickHandler}>
                Add One More
            </button>
        )
    }
}
export default Child;