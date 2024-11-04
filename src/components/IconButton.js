import React from 'react';

const IconButton = ({ icon, backgroundColor = '#ffffff', iconColor = '#312e81' }) => {
  return (
    <div
      className="inline-flex items-center justify-center w-10 h-10 rounded-full"
      style={{ backgroundColor }}
    >
      <span
        className="text-lg flex items-center justify-center"
        style={{ color: iconColor }}
      >
        {icon}
      </span>
    </div>
  );
};

export default IconButton;
