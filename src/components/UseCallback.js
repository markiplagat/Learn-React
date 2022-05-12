import React, {useCallback, useState} from 'react';

const UseCallback = () => {
  const [player, setPlayer] = useState("");
  const [players, setPlayers] = useState(["Messi", "Ronaldo", ]);

  function handleChangeInput(event) {
    setPlayer(event.target.value);
  }

  function handleAddPlayer() {
    setPlayers(players.concat(player));
  }
  const handleRemovePlayer = useCallback(player => {
    setPlayers(players.filter((p) => p !== player));
  }, [players])

  return(
    <React.Fragment>
      <input onChange={handleChangeInput} />
      <button onClick={handleAddPlayer}>Add Player</button>
      <PlayerList players={players} handleRemovePlayer={handleRemovePlayer} />
    </React.Fragment>
  );
};

function PlayerList({ players, handleRemovePlayer }) {
  return(
    <React.Fragment>
      <ul>
        {players.map((player) => (
          <li key={player} onClick={() => handleRemovePlayer(player)}>
            {player}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default UseCallback;

