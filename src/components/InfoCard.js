import React, { useState } from 'react';

const InfoCard = ({ title, value, percentage, icon, background, cursor, hoverShadow }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="p-4 bg-white rounded-2xl"
      style={{
        cursor,
        boxShadow: isHovered ? hoverShadow : 'none', // Apply hover shadow dynamically
        transition: 'box-shadow 0.3s ease', // Smooth transition for shadow effect
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center">
        <div
          className="p-4 rounded-full ml-2"
          style={{ background }}
        >
          <div style={{ color: 'white' }}>
            {icon}
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="text-xl font-bold">{value}</p>
          <p className="text-sm" style={{ color: percentage > 0 ? 'green' : 'red' }}>
            {percentage > 0 ? `+${percentage}%` : `${percentage}%`} <span className="text-gray-500">less than last month</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;


