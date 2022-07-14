import './App.scss';
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import GameRender from './components/Game/GameRender';
import StartModal from './components/StartModal/StartModal';

function App() {
  const [foundChars, setFoundChars] = useState({ Luigi: false, Toad: false, Link: false });
  const [foundNotif, setNotif] = useState({ greenNotif: false, redNotif: false, charName: '' });
  const [gameStart, setGameStatus] = useState(false);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  return (
    <div className="App">
      <Navbar
        foundChars={foundChars}
        foundNotif={foundNotif}
        setNotif={setNotif}
        time={time}
        setTime={setTime}
        running={running}
      />
      <GameRender
        foundChars={foundChars}
        setFoundChars={setFoundChars}
        foundNotif={foundNotif}
        setNotif={setNotif}
        setGameStatus={setGameStatus}
        setRunning={setRunning}
        setTime={setTime}
        time={time}
      />
      {!gameStart ? (
        <StartModal
          gameStart={gameStart}
          setGameStatus={setGameStatus}
          setRunning={setRunning}
        />
      ) : ''}
    </div>
  );
}

export default App;
