import './App.scss';
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import GameRender from './components/Game/GameRender';
import StartModal from './components/StartModal/StartModal';

function App() {
  const [foundChars, setFoundChars] = useState({ Luigi: false, Toad: false, Link: false });
  const [foundNotif, setNotif] = useState({ greenNotif: false, redNotif: false, charName: '' });
  return (
    <div className="App">
      <Navbar
        foundChars={foundChars}
        foundNotif={foundNotif}
        setNotif={setNotif}
      />
      <GameRender
        foundChars={foundChars}
        setFoundChars={setFoundChars}
        foundNotif={foundNotif}
        setNotif={setNotif}
      />
      <StartModal />
    </div>
  );
}

export default App;
