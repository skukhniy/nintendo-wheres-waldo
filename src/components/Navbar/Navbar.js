import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';
import Link from '../../assets/Link.png';
import Luigi from '../../assets/Luigi.png';
import Toad from '../../assets/Toad.png';
import Timer from './Timer';

export default function Navbar({
  foundChars, foundNotif, time, setTime, running,
}) {
  Navbar.propTypes = {
    foundChars: PropTypes.shape({
      Luigi: PropTypes.bool,
      Toad: PropTypes.bool,
      Link: PropTypes.bool,
    }).isRequired,
    foundNotif: PropTypes.bool.isRequired,
    time: PropTypes.number.isRequired,
    setTime: PropTypes.func.isRequired,
    running: PropTypes.bool.isRequired,
  };

  console.log(foundNotif);
  return (
    <div className="NavbarContainer">
      <div className="Navbar">
        <div className="Logo">
          <h2 data-testid="title">{'Super Hide & Seek'}</h2>
        </div>
        <div className="hidingChars">
          <div className={foundChars.Luigi ? 'foundChar' : ''}>
            <img src={Luigi} alt="Luigi" />
            <h3>Luigi</h3>
          </div>
          <div className={foundChars.Toad ? 'foundChar' : ''}>
            <img src={Toad} alt="Toad" />
            <h3>Toad</h3>
          </div>
          <div className={foundChars.Link ? 'foundChar' : ''}>
            <img src={Link} alt="Link" />
            <h3>Link</h3>
          </div>
        </div>
        <Timer
          time={time}
          setTime={setTime}
          running={running}
        />
      </div>
      <div className={`charFound  ${foundNotif.greenNotif ? 'showGreen' : ''} ${foundNotif.redNotif ? 'showRed' : ''}`}>
        {foundNotif.greenNotif ? <p>{`Found ${foundNotif.charName}`}</p> : ''}
        {foundNotif.redNotif ? <p>Sorry, wrong character!</p> : ''}
      </div>
    </div>
  );
}
