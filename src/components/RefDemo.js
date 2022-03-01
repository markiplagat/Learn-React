import React, { Component } from 'react';

class RefDemo extends Component {
  // var amount = 23,000;
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };

    this.state = {};
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    // this.inputRef.current.focus()
    // console.log(this.inputRef)
  }

  handleClick = () => {
    alert(this.inputRef.current.value);
  };
  removeCommas(str) {
    while (str.search(',') >= 0) {
      str = (str + '').replace(',', '');
    }
    return str;
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const amount = '20,000'.split(',').join('');
    const a = parseInt(amount);
    // const b = (a.split(/\,/g,' '));

    return (
      <div>
        {amount}
        <br />
        {a}
        <input type="text" value={this.state.amount} />
        {`ksh ${this.state.amount.replace(/\,/g, '')}`}
        {(23, 333, 333).split(',').join('')}
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>Ref</button>
      </div>
    );
  }
}

export default RefDemo;
