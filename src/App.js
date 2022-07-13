import './App.scss';
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import GameRender from './components/Game/GameRender';

function App() {
  const [foundChars, setFoundChars] = useState({ Luigi: false, Toad: false, Link: false });
  return (
    <div className="App">
      <Navbar foundChars={foundChars} />
      <GameRender foundChars={foundChars} setFoundChars={setFoundChars} />
    </div>
  );
}

export default App;
