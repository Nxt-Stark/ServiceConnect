import React from 'react';
import FormInput from './FormInput';
import PhotoUpload from './PhotoUpload';
import Dropdown from './Dropdown';
import PhoneInput from './PhoneInput';
import Button from './Button';

const StudentDetailsForm = () => {
  const genderOptions = ['Male', 'Female', 'Other'];

  return (
    <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-xl shadow-lg">
      <h2 className="bg-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-t-xl">
        Student Details
      </h2>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <PhotoUpload />

        <FormInput label="Full Name" placeholder="Full Name" />
        <FormInput label="Address" placeholder="Address" />
        <FormInput label="Date of Birth" type="date" />
        <FormInput label="Email" type="email" placeholder="Email" />
        <PhoneInput />
        <Dropdown label="Gender" options={genderOptions} />
        
        <FormInput label="House Name" placeholder="House Name" />
        <FormInput label="Land mark" placeholder="Land mark" />
        <FormInput label="Pin code" placeholder="Pin code" />
        <FormInput label="District" placeholder="District" />
        <FormInput label="State" placeholder="State" />

        <p className="text-xs text-gray-500 col-span-2">*Other info is required</p>
        
        <div className="col-span-2 flex justify-end space-x-4">
          <Button label="Save as Draft" variant="secondary" />
          <Button label="Submit" />
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsForm;
