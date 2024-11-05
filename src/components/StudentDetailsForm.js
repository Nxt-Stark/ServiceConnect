import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import FormInput from './FormInput';
import PhotoUpload from './PhotoUpload';
import Dropdown from './Dropdown';
import PhoneInput from './PhoneInput';
import Button from './Button';

const StudentDetailsForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const genderOptions = ['Male', 'Female', 'Other'];

  const handleGoBack = () => {
    window.history.back();
  };

  const generateUniqueId = () => {
    return `#${Math.floor(100000000 + Math.random() * 900000000)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const uniqueId = generateUniqueId(); 
    const serviceNum = 0; 
    const statusDet = 'Active'; 
    const finalData = { ...formData, id: uniqueId, service: serviceNum, status:statusDet, };  
  
    console.log('Final data before saving:', finalData);
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    users.push(finalData);
  
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Form submitted successfully and data saved to local storage!'); 
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FORM', payload: { [name]: value } });
  };

  const handleImageUpload = (url) => {
    dispatch({ type: 'SET_IMAGE_URL', payload: url });
  };

  return (
    <div className="ml-0 mt-12 md:mt-0 md:ml-64 mx-auto bg-white p-4 rounded-2xl relative">
      <button 
        onClick={handleGoBack} 
        className="absolute top-4 left-4 px-2 rounded-full font-bold text-white"
        aria-label="Go Back"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h2 className="bg-indigo-600 text-white text-lg font-semibold px-4 pl-12 -m-4 mb-4 py-3 pt-4 rounded-t-xl">
        Student Details
      </h2>
      <form onSubmit={handleSubmit} className="p-4 flex flex-col md:flex-row md:flex-wrap gap-4">
        <PhotoUpload onUpload={handleImageUpload} className="md:w-1/2 w-full" />

        <FormInput 
          label="Full Name" 
          placeholder="Full Name" 
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="md:w-1/2 w-full" 
        />
        <FormInput 
          label="Address" 
          placeholder="Address" 
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="md:w-1/2 w-full" 
        />
        <FormInput 
          label="Date of Birth" 
          type="date" 
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="md:w-1/2 w-full" 
        />
        <FormInput 
          label="Email" 
          type="email" 
          placeholder="Email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="md:w-1/2 w-full" 
        />
        <PhoneInput 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="md:w-1/2 w-full" 
        />
        <Dropdown 
          label="Gender" 
          options={genderOptions} 
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="md:w-1/2 w-full" 
        />

        <FormInput 
          label="House Name" 
          placeholder="House Name" 
          name="houseName"
          value={formData.houseName}
          onChange={handleChange}
          className="md:w-1/2 w-full" 
        />
        <FormInput 
          label="Landmark" 
          placeholder="Landmark" 
          name="landmark"
          value={formData.landmark}
          onChange={handleChange}
          className="md:w-1/2 w-full" 
        />
        <FormInput 
          label="Pin Code" 
          placeholder="Pin Code" 
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          className="md:w-1/2 w-full" 
        />
        <FormInput 
          label="District" 
          placeholder="District" 
          name="district"
          value={formData.district}
          onChange={handleChange}
          className="md:w-1/2 w-full" 
        />
        <FormInput 
          label="State" 
          placeholder="State" 
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="md:w-1/2 w-full" 
        />

        <div className="flex flex-col gap-2 md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-4 col-span-2 w-full">
          <Button variant="outline" className="flex items-center" type="button">
            Save as Draft
          </Button>
          <Button variant="primary" className="flex items-center" type="submit">
            Submit Details
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StudentDetailsForm;
