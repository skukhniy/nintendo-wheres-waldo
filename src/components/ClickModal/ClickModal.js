import React from 'react';
import PropTypes from 'prop-types';
import {
  getDoc, doc, updateDoc,
} from 'firebase/firestore';
import db from '../../firebase';
import './ClickModal.scss';
import Luigi from '../../assets/Luigi.png';
import Link from '../../assets/Link.png';
import Toad from '../../assets/Toad.png';

export default function ClickModal({
  cordinates, foundChars, setFoundChars, setNotif, setClickModal,
}) {
  console.log(cordinates);
  ClickModal.propTypes = {
    cordinates: PropTypes.shape({
      clickedX: PropTypes.number,
      clickedY: PropTypes.number,
      targetX: PropTypes.number,
      targetY: PropTypes.number,
      maxWidth: PropTypes.number,
      maxHeight: PropTypes.number,
    }).isRequired,
    foundChars: PropTypes.shape({
      Luigi: PropTypes.bool,
      Toad: PropTypes.bool,
      Link: PropTypes.bool,
    }).isRequired,
    setClickModal: PropTypes.func.isRequired,
    setFoundChars: PropTypes.func.isRequired,
    setNotif: PropTypes.func.isRequired,
  };

  const modalCordinates = () => {
    let modalX = cordinates.clickedX + 20;
    let modalY = cordinates.clickedY;
    // check if modal goes past the screen, if so, move the modal in the other direction
    if ((modalX + 105) > cordinates.maxWidth) {
      modalX -= 125;
    } if ((modalY + 120) > cordinates.maxHeight) {
      modalY -= 120;
    }
    return ({ x: modalX, y: modalY });
  };

  function checkChar(char) {
    const charRef = doc(db, 'Cordinates', char);
    getDoc(charRef)
      .then((document) => {
        const charData = document.data();
        // check if clicked cordinates are within the characters range
        if ((charData.xmin < cordinates.targetX && cordinates.targetX < charData.xmax)
        && (charData.ymin < cordinates.targetY && cordinates.targetY < charData.ymax)) {
          console.log(`You Found ${char}!`);
          // update the data in the firebase storage
          updateDoc(charRef, {
            isFound: true,
          });
          console.log('setNotif2 - false');
          // update the foundChars state
          const cloneObj = { ...foundChars };
          cloneObj[char] = true;
          setFoundChars(cloneObj);
          setNotif({ greenNotif: true, redNotif: false, charName: char });
        } else {
          setNotif({ greenNotif: false, redNotif: true, charName: char });
          console.log('Sorry, incorrect!');
        }
      });
  }

  function charButton(char) {
  // update the notifcation state
    setNotif({ greenNotif: false, redNotif: false, charName: char });
    checkChar(char);
    setClickModal(false); // turn off modal window
  }
  // grab string arguement
  // open firebase doc by id (which is identical to char)
  // grab doc cordinate range
  // check if current cord range is within those parameters
  // if so, change found attr in doc

  return (
    <div className="ModalContainer" data-testid="container" style={{ top: `${modalCordinates().y}px`, left: `${modalCordinates().x}px` }}>
      <div className="charButton">
        <button type="button" onClick={() => charButton('Luigi')}>
          <img src={Luigi} alt="Luigi" />
          <span>Luigi</span>
        </button>
      </div>
      <div className="charButton">
        <button type="button" onClick={() => charButton('Toad')}>
          <img src={Toad} alt="Toad" />
          <span>Toad</span>
        </button>
      </div>
      <div className="charButton">
        <button type="button" onClick={() => charButton('Link')}>
          <img src={Link} alt="Link" id="linkImg" />
          <span>Link</span>
        </button>
      </div>
    </div>
  );
}
