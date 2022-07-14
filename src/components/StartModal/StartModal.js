import React from 'react';
import './StartModal.scss';
import Link from '../../assets/Link.png';
import Luigi from '../../assets/Luigi.png';
import Toad from '../../assets/Toad.png';

export default function StartModal() {
  return (
    <div>
      <div className="startModal">
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
        <button className="startButton" type="button">START</button>
      </div>
      <div className="Overlay startOverlay" />
    </div>
  );
}