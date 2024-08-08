import React from 'react';

const Button = ({ color, text, onClick, link }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onClick}
      href={link}
    >
      {text}
    </button>
  );
};

export default Button;
