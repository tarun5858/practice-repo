// ClockTimer.jsx
import React from 'react';

// This component is entirely pure. It receives data and displays it.
function ClockTimer({ timeString, textColor }) {
  return (
    <div style={{ textAlign: 'center', margin: '20px', fontFamily: 'monospace' }}>
      <h2>Current Time:</h2>
      <h1 style={{ color: textColor, fontSize: '3rem', transition: 'color 0.3s ease' }}>
        {timeString}
      </h1>
    </div>
  );
}

export default ClockTimer;