import React from 'react';


const FormInput = ({ label,type, name, value, onChange, ...props }) => {
  return (
    <div className="form-input flex flex-col mb-4">
      <label className='text-sm font-semibold text-gray-600 mb-1'>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} {...props}
      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
    </div>
  );
};

export default FormInput;

