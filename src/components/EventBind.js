import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Click Here',
    };
  }

  clickHandler() {
    this.setState({
      message: 'You are a Good Person. Cheers!!',
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*using the bind method*/}
        <button onClick={this.clickHandler.bind(this)}>Click</button>
        {/*alternatively we can use the arrow function*/}
      </div>
    );
  }
}

export default EventBind;
