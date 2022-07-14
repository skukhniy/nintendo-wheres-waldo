import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './GameRender.scss';
// import {
//   getDoc, doc,
// } from 'firebase/firestore';
// import db from '../../firebase';
import gamecube from '../../assets/gamecube.jpeg';
import ClickModal from '../ClickModal/ClickModal';
import GameOver from './GameOver';

export default function GameRender({
  foundChars, setFoundChars, setNotif,
}) {
  GameRender.propTypes = {
    foundChars: PropTypes.shape({
      Luigi: PropTypes.bool,
      Toad: PropTypes.bool,
      Link: PropTypes.bool,
    }).isRequired,
    setNotif: PropTypes.func.isRequired,
    setFoundChars: PropTypes.func.isRequired,
  };
  const [clickModalState, setClickModal] = useState(false);
  const [cordinates, setCordinates] = useState({});

  function returnCordinates(e) {
    // grab max width/height of the page:
    const mWidth = e.view.outerWidth;
    const mHeight = e.target.height;
    // gets the current click cordinates in relation to the image
    const { offsetX } = e.nativeEvent;
    const { offsetY } = e.nativeEvent;
    // this is the size of the image in the HTML
    const { offsetWidth } = e.target;
    const { offsetHeight } = e.target;
    // the original resolution of the image
    const originalWidth = 1080;
    const originalHeight = 1842;
    // determines how much the image grew once it was added to the HTML
    const growthFactorY = offsetHeight / originalHeight;
    const growthFactorX = offsetWidth / originalWidth;
    // reverses the growth to find what the cordinates would be at the original image resolution
    const targX = offsetX / growthFactorX;
    const targY = offsetY / growthFactorY;
    return {
      clickedX: offsetX,
      clickedY: offsetY,
      targetX: targX,
      targetY: targY,
      maxWidth: mWidth,
      maxHeight: mHeight,
    };
  }

  function gameOverCheck() {
    return Object.values(foundChars).every((v) => v === true);
  }
  return (
    <div className="GameContainer">
      <img
        src={gamecube}
        alt="gamecube"
        onClick={(e) => {
          setClickModal(!clickModalState);
          setCordinates(returnCordinates(e));
        }}
      />
      {clickModalState && (
      <ClickModal
        cordinates={cordinates}
        foundChars={foundChars}
        setFoundChars={setFoundChars}
        setNotif={setNotif}
        setClickModal={setClickModal}
      />
      )}
      {gameOverCheck() ? <GameOver setFoundChars={setFoundChars} /> : null }
    </div>
  );
}
