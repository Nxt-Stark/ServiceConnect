import React from 'react';

const InfoCard = ({ title, value, percentage, icon, color }) => {
  return (
    <div
      className="flex items-center p-4 bg-white rounded-lg d-inline"
      style={{ borderColor: color }}
    >
      <div
        className="flex items-center justify-center w-12 h-12 rounded-full text-white text-xl"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p
          className={`text-sm ${percentage >= 0 ? 'text-green-500' : 'text-red-500'}`}
        >
          {percentage >= 0 ? `+${percentage}%` : `${percentage}%`} than last month
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
