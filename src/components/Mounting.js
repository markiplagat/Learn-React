import React, { Component } from 'react';
import MountingChildren from './MountingChildren';

class Mounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'mark',
    };
    console.log('Mounting constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Mounting getDerivedStateFromProps');
    return null;
  }
  shouldComponentUpdate() {
    console.log('Mounting shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Mounting getSnapShotBeforeUpdate');
  }
  componentDidUpdate() {
    console.log('Mounting componentDidUpdate');
  }

  componentDidMount() {
    console.log('Mounting componentDidMount');
  }
  changeState = () => {
    this.setState({
      name: 'Codevolution',
    });
  };
  render() {
    console.log('Mounting render');
    return (
      <div>
        Mounting render
        <button onClick={this.changeState}>Change state</button>
        <MountingChildren />
      </div>
    );
  }
}
export default Mounting;
