import React, { useState, useEffect } from 'react';
import "../App.css"


const CountdownTimer = () => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let intervalId = null;

    if (duration > 0) {
      intervalId = setInterval(() => {
        setDuration(prevDuration => prevDuration - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [duration]);

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      const { value } = event.target;
      setDuration(parseInt(value));
    }
  };

  return (
    <div>
      <input className='input' type="number" defaultValue={0} onKeyDown={handleKeyDown} />
      <span style={{"fontSize":"1rem","color":"white"}}>  Press enter to start</span>
      {duration >= 0 ? (
        <div className="countdown">{duration}</div>
      ) : (
        <div className="countdown">0</div>
      )}
    </div>
  );
};

export default CountdownTimer;

