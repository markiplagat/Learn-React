import React, { useState } from 'react';

const UseStateHook = () => {
  // let name = "Mark"
  const [name, setName] = useState('Mark');

  const handleClick = () => {
    setName('Rutto');
  };
  return (
    <div>
      <h2>{name}</h2>'<button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UseStateHook;
