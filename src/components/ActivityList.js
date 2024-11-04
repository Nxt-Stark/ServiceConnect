import React from 'react';

const ActivityList = ({ title, items }) => (
  <div className="p-4 bg-white rounded shadow">
    <h3 className="text-lg font-semibold">{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="flex justify-between my-2">
          <span>{item.name}</span>
          <span>{item.location}</span>
          <span>{item.time}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ActivityList;
