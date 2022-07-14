import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Timer({
  time, setTime, running,
}) {
  Timer.propTypes = {
    time: PropTypes.number.isRequired,
    setTime: PropTypes.func.isRequired,
    running: PropTypes.bool.isRequired,
  };
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div>
      <div className="timer">
        <div className="numbers">
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
    </div>
  );
}
