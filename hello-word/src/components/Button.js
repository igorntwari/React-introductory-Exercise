import React from 'react';

export default function Button() {
  const handleButtonClick = (buttonId) => {
    alert(`Button ${buttonId} was clicked`);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>click Me 1</button>
      <button onClick={() => handleButtonClick(2)}>click Me 2</button>
      <button onClick={() => handleButtonClick(3)}>click Me 3</button>
    </div>
  );
}
