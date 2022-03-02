import React, { Component } from 'react';

export default class MountingChildren extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'mark',
    };
    console.log('MountingChildren constructor');
  }

  static getDerivedStateFromProps(state, props) {
    console.log('MountingChildren getDerivedStateProps');
    return null;
  }

  componentDidMount() {
    console.log('MountingChildren componentDidMount');
    return null;
  }

  shouldComponentUpdate() {
    console.log('Mounting B shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('MountingChildren ComponentDidUpdate');
  }

  render() {
    console.log('Mounting children');
    return <div>Mounting Children</div>;
  }
}
