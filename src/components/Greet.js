import React from 'react';

const Greet = () => {
  const name = "Mark";
  const heroName = 'Coder';
  return (
    <div>
      <h1>
        Hello {name} aka {heroName}
      </h1>
    </div>
  );
};

export default Greet;
