// Sending data back to the parent
import React, { useState } from 'react';

const Child = () => {
  const [count, setCount] = useState(0);
  const outputEvent = (event) => {
    // event context comes from the Child
    setCount(count);
  };

  return (
    <div>
      Count: {count}
      <Child2 clickHandler={outputEvent} />
    </div>
  );
};

class Child2 extends React.Component {
  render() {
    return <button onClick={this.props.clickHandler}>Add One More</button>;
  }
}
export default Child;
