import React from 'react';
import PropTypes from 'prop-types';
import './ClickModal.scss';
import Luigi from '../../assets/Luigi.png';
import Link from '../../assets/Link.png';
import Toad from '../../assets/Toad.png';

export default function ClickModal({ cordinates }) {
  ClickModal.propTypes = {
    cordinates: PropTypes.objectOf.isRequired,
  };

  function grabModalCordinates() {
    let modalX = cordinates.clickedX + 20;
    let modalY = cordinates.clickedY;
    // check if modal goes past the screen, if so, move the modal in the other direction
    if ((modalX + 105) > cordinates.maxWidth) {
      modalX -= 125;
    } if ((modalY + 120) > cordinates.maxHeight) {
      modalY -= 120;
    }

    return ({ x: modalX, y: modalY });
  }
  const modalCordinates = grabModalCordinates();
  console.log(cordinates);
  return (
    <div className="ModalContainer" data-testid="container" style={{ top: `${modalCordinates.y}px`, left: `${modalCordinates.x}px` }}>
      <div className="charButton">
        <button type="button">
          <img src={Luigi} alt="Luigi" />
          <span>Luigi</span>
        </button>
      </div>
      <div className="charButton">
        <button type="button">
          <img src={Toad} alt="Toad" />
          <span>Toad</span>
        </button>
      </div>
      <div className="charButton">
        <button type="button">
          <img src={Link} alt="Link" id="linkImg" />
          <span>Link</span>
        </button>
      </div>
    </div>
  );
}
