import React from 'react';
import './ClickModal.scss';
import Luigi from '../../assets/Luigi.png';
import Link from '../../assets/Link.png';
import Toad from '../../assets/Toad.png';

export default function ClickModal() {
  return (
    <div className="ModalContainer">
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
