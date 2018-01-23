import React from 'react';

const Square = ({ color, active, click, disabled }) => {
  const className = active ? 'active' : '';

  return (
    <div className={`square ${className}`}>
        <button style={{ backgroundColor: `${color}` }} onClick={click} disabled={!disabled}></button>
    </div>
  );
};

export default Square;
