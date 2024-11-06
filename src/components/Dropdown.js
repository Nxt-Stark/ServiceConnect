import React from 'react';

const Dropdown = ({ label, options, name, value, onChange }) => (
  <div className="form-input flex flex-col mb-4">
    <label className='text-sm font-semibold text-gray-600 mb-1'>{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <option value="">Select</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default Dropdown;

