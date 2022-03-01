import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [joke, setJoke] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    console.log('I re-rendered');
  }, [update]);

  useEffect(() => {
    let didCancel = false;

    async function fetchJoke() {
      if (!didCancel) {
        let res = await fetch('https://api.chucknorris.io/jokes/random');
        let data = await res.json();
        setJoke(data);
      }
    }

    fetchJoke();

    return () => {
      didCancel = true;
    };
  }, [update]);

  return (
    <div>
      <h1>Chucknorris Jokes</h1>
      {joke && (
        <>
          <img src={joke.icon_url} alt={joke.id} />
          <h2>{joke.value}</h2>
        </>
      )}
      <button onClick={() => setUpdate((prevState) => !prevState)}>Get a new joke</button>
    </div>
  );
};
export default UseEffect;
