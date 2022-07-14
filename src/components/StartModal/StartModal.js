import React from 'react';
import PropTypes from 'prop-types';
import './StartModal.scss';
import Link from '../../assets/Link.png';
import Luigi from '../../assets/Luigi.png';
import Toad from '../../assets/Toad.png';

export default function StartModal({ gameStart, setGameStatus }) {
  StartModal.propTypes = {
    gameStart: PropTypes.bool.isRequired,
    setGameStatus: PropTypes.func.isRequired,
  };
  return (
    <div>
      <div className={!gameStart ? 'startModal' : 'off'}>
        <h1>{'Super Hide & Seek'}</h1>
        <p>The three characters below are hidden somewhere inside the GameCube.</p>
        <p>See how fast you can find them!</p>
        <div className="charactersContainer">
          <div className="character">
            <h2>Luigi</h2>
            <img src={Luigi} alt="Luigi" />
          </div>
          <div className="character">
            <h2>Toad</h2>
            <img src={Toad} alt="Toad" />
          </div>
          <div className="character">
            <h2>Link</h2>
            <img src={Link} alt="Link" />
          </div>
        </div>
        <button className="startButton" type="button" onClick={() => setGameStatus(true)}>START</button>
      </div>
      <div className={!gameStart ? 'Overlay startOverlay' : 'off'} />
    </div>
  );
}
