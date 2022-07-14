import React from 'react';
import PropTypes from 'prop-types';
import './GameRender.scss';
import {
  getDoc, doc, updateDoc,
} from 'firebase/firestore';
import db from '../../firebase';

export default function GameOver({ setFoundChars, setGameStatus }) {
  GameOver.propTypes = {
    setFoundChars: PropTypes.func.isRequired,
    setGameStatus: PropTypes.func.isRequired,
  };
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
  }
  return (
    <div className="GameOverContainer">
      <div className="Modal">
        <h1>Congrats, You Won!</h1>
        <div>
          <h2>Your current record is:</h2>
          <h1>0:03</h1>
        </div>
        <div>
          <button type="button" onClick={resetGame}>Play Again?</button>
        </div>
      </div>
      <div className="Overlay" />
    </div>
  );
}
