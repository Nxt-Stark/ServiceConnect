import React from 'react';

const PhoneInput = () => (
  <div className="flex flex-col mb-4">
    <label className="text-sm font-semibold text-gray-600 mb-1">Phone</label>
    <div className="flex items-center">
      <span className="text-gray-500 mr-2">🇺🇸 (+1)</span>
      <input
        type="text"
        placeholder="Phone Number"
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"
      />
    </div>
  </div>
);

export default PhoneInput;
