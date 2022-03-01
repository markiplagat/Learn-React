function Arrays() {
  const characters = [
    {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      eye_color: 'blue',
      gender: 'male',
    },
    {
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      eye_color: 'yellow',
      gender: 'male',
    },
    {
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      eye_color: 'brown',
      gender: 'female',
    },
    {
      name: 'Anakin Skywalker',
      height: 188,
      mass: 84,
      eye_color: 'blue',
      gender: 'male',
    },
  ];

  //***MAP***
  //1. Get array of all names
  const names = characters.map((character) => {
    return character.name;
  });
  console.log(names);

  //2. Get array of all heights
  const heights = characters.map((character) => {
    return character.height;
  });
  console.log(heights);

  //3. Get array of objects with just name and height properties
  const minifiedRecords = characters.map((character) => ({
    name: character.name,
    height: character.height,
  }));
  console.log(minifiedRecords);

  //4. Get array of all first names
  const firstName = characters.map((character) => {
    return character.name.split(' '[0]);
  });
  console.log(firstName);

  //***REDUCE***
  //1. Get total mass of all characters
  const totalMass = characters.reduce((acc, cur) => {
    return acc + cur.mass;
  }, 0);
  console.log(totalMass);

  //2. Get total height of all characters
  const totalHeight = characters.reduce((acc, cur) => {
    return acc + cur.height;
  }, 0);
  console.log(totalHeight);

  //3. Get total number of characters by eye color
  const charEyeColor = characters.reduce((acc, cur) => {
    if (acc[cur.eye_color]) {
      acc[cur.eye_color] = acc[cur.eye_color] + 1;
    } else {
      acc[cur.eye_color] = 1;
    }
    return acc;
  }, {});
  console.log(charEyeColor);

  //4. Get total number of characters in all the character names
  const totalNameCharacters = characters.reduce((acc, cur) => {
    return acc + cur.name.length;
  }, 0);
  console.log(totalNameCharacters);

  //***FILTER***
  //1. Get characters with mass greater than 100
  const greater100Characters = characters.filter((character) => {
    return character.mass > 100;
  });
  console.log(greater100Characters);

  //2. Get characters with height less than 200
  const shortCharacters = characters.filter((character) => {
    return character.height < 200;
  });
  console.log(shortCharacters);

  //3. Get all male characters
  const maleCharacters = characters.filter((character) => {
    return character.gender === 'male';
  });
  console.log(maleCharacters);

  //4. Get all female characters
  const femaleCharacters = characters.filter((character) => {
    return character.gender === 'female';
  });
  console.log(femaleCharacters);
  //***SORT***
  //1. Sort by mass
  const byMass = characters.sort((a, b) => {
    return b.mass - a.mass;
  });
  console.log(byMass);

  //2. Sort by height
  const byHeight = characters.sort((a, b) => {
    return a.height - b.height;
  });
  console.log(byHeight);

  //3. Sort by name
  const byName = characters.sort((a, b) => {
    if (a.name < b.name) return -1;
    return 1;
  });
  console.log(byName);

  //4. Sort by gender
  const byGender = characters.sort((a, b) => {
    if (a.gender === 'female') return 1;
    return -1;
  });
  console.log(byGender);

  //***EVERY***
  //1. Does every character have blue eyes?
  const allBlueEyes = characters.every((character) => {
    return character.eye_color === 'blue';
  });
  console.log(allBlueEyes);

  //2. Does every character have mass more than 40?
  const allMassMoreThan40 = characters.every((character) => {
    return character.mass > 40;
  });
  console.log(allMassMoreThan40);

  //3. Is every character shorter than 200?
  const shorterThan200 = characters.every((character) => {
    return character.height < 200;
  });
  console.log(shorterThan200);

  //4. Is every character male?
  const everyCharacterMale = characters.every((character) => {
    return character.gender === 'male';
  });
  console.log(everyCharacterMale);

  //***SOME***
  //1. Is there at least one male character?
  const onemaleCharacter = characters.some((character) => {
    return character.gender === 'male';
  });
  console.log(onemaleCharacter);

  //2. Is there at least one character with blue eyes?
  const oneBlueEyeCharacter = characters.some((character) => {
    return character.eye_color === 'blue';
  });
  console.log(oneBlueEyeCharacter);

  //3. Is there at least one character taller than 210?
  const oneTallerThan210 = characters.some((character) => {
    return character.height > 210;
  });
  console.log(oneTallerThan210);

  //4. Is there at least one character that has mass less than 50?
  const massLessThan50 = characters.some((character) => {
    return character.mass < 50;
  });
  console.log(massLessThan50);

  return <h1>Use console to see the logged results</h1>;
}
export default Arrays;
