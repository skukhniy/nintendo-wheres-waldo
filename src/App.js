import './App.scss';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import GameRender from './components/Game/GameRender';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <GameRender></GameRender>
    </div>
  );
}

export default App;
