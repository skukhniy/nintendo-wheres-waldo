import React from 'react';
import PropTypes from 'prop-types';
import './GameRender.scss';
import {
  getDoc, doc, updateDoc,
} from 'firebase/firestore';
import db from '../../firebase';

export default function GameOver({
  setFoundChars, setGameStatus, setRunning, time, setTime,
}) {
  GameOver.propTypes = {
    setFoundChars: PropTypes.func.isRequired,
    setGameStatus: PropTypes.func.isRequired,
    setTime: PropTypes.func.isRequired,
    setRunning: PropTypes.func.isRequired,
    time: PropTypes.func.isRequired,
  };
  // stop timer
  setRunning(false);

  function resetGame() {
    const charArray = ['Luigi', 'Toad', 'Link'];
    charArray.forEach((character) => {
      const charRef = doc(db, 'Cordinates', character);
      getDoc(charRef)
        .then(() => {
          updateDoc(charRef, {
            isFound: false,
          });
        });
    });
    setFoundChars({ Luigi: false, Toad: false, Link: false });
    setGameStatus(false);
    setTime(0);
  }
  return (
    <div className="GameOverContainer">
      <div className="Modal">
        <h1>Congrats, You Won!</h1>
        <div>
          <h2>Your current record is:</h2>
          <div className="time">
            <span>
              {(`0${Math.floor((time / 60000) % 60)}`).slice(-2)}
              :
            </span>
            <span>
              {(`0${Math.floor((time / 1000) % 60)}`).slice(-2)}
              :
            </span>
            <span>{(`0${(time / 10) % 100}`).slice(-2)}</span>
          </div>
        </div>
        <div>
          <button type="button" onClick={resetGame}>Play Again?</button>
        </div>
      </div>
      <div className="Overlay" />
    </div>
  );
}
