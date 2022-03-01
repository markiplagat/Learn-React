// Shows the communication of the parent to the child.
import React, { Component } from 'react';

class Parent extends Component {
  render() {
    const variable = 5;
    return (
      <div>
        <Child message="message for child" />
        <Child message={variable} />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}
export default Parent;
