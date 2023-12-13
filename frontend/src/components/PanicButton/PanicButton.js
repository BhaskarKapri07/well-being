import React from 'react';
import './PanicButton.css';

function PanicButton() {
  const handleClick = () => {
    console.log('Panic Button Clicked!');
  };

  return (
    <button className="panic-button" onClick={handleClick}>
      Panic Button
    </button>
  );
}

export default PanicButton;
