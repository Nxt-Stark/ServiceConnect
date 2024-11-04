import React from 'react';

const FormInput = ({ label, type = 'text', placeholder }) => (
  <div className="flex flex-col mb-4">
    <label className="text-sm font-semibold text-gray-600 mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
);

export default FormInput;
