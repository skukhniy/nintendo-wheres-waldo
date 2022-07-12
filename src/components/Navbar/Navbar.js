import React from 'react';
import './Navbar.scss';
import Link from '../../assets/Link.png';
import Luigi from '../../assets/Luigi.png';
import Toad from '../../assets/Toad.png';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <h2 data-testid="title">{'Super Hide & Seek'}</h2>
      </div>
      <div className="hidingChars">
        <div>
          <img src={Luigi} alt="Luigi" />
          <h3>Luigi</h3>
        </div>
        <div>
          <img src={Toad} alt="Toad" />
          <h3>Toad</h3>
        </div>
        <div>
          <img src={Link} alt="Link" />
          <h3>Link</h3>
        </div>
      </div>
      <div className="timerContainer">
        <h2>0:00</h2>
      </div>
    </div>
  );
}
