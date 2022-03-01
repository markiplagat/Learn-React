import React, { useState, useEffect } from 'react';

export default function Fetch() {
  const pictureStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginLeft: '10px',
  };
  const [picture, setPicture] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=500')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let pictures = data.results.map((pic) => {
          return (
            <div key={pic.results}>
              <img src={pic.picture.medium} alt={pic.picture} />
            </div>
          );
        });
        setPicture(pictures);
      });
  }, []);

  return <div style={pictureStyles}>{picture}</div>;
}
