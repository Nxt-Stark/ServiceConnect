import React from 'react';

const ServiceCategories = ({ categories }) => (
  <div className="p-4 bg-white rounded shadow">
    <h3 className="text-lg font-semibold">Service Categories</h3>
    <ul>
      {categories.map((category, index) => (
        <li key={index} className="p-2 my-1 rounded bg-gray-100">{category}</li>
      ))}
    </ul>
  </div>
);

export default ServiceCategories;