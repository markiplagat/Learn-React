import React, { useState } from 'react';

const Greet = () => {
  const [name, serName] = useState('Mark');
  const [heroName, setHeroName] = useState('Coder');
  return (
    <div>
      <h1>
        Hello {name} aka {heroName}
      </h1>
    </div>
  );
};

export default Greet;
