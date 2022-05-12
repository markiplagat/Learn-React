import React, {createContext, useContext} from 'react';

const NameContext = createContext('');

const UseContext = () => {
  return(
    <NameContext.Provider value="mark">
      <Body />
    </NameContext.Provider>
  );
};

const Body = () => {
  return <Greeting />
};

const Greeting = () => {
  const name = useContext(NameContext)
  return(
    <h1>Welcome, {name}</h1>
  );
};

export default UseContext;
