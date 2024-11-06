import React from 'react';
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ProfilePicture from './ProfilePicture';
import { Heading, Heading2 } from '../components/heading'; 
import IconButton from './IconButton';

const Card = ({ 
  profileImage, 
  id,
  name, 
  role, 
  location, 
  district,
  address, 
  phone, 
  email 
}) => {
  return (
    <div className="w-full mx-auto bg-white rounded-2xl overflow-hidden">
      <div className="relative bg-indigo-900 h-24 flex">
        <div className='mt-5 ml-5'>
          <ProfilePicture src={profileImage} />
        </div>
        <div className="absolute top-14 right-44 w-36 h-10 bg-[#FB7D5B] rounded-tl-2xl hidden md:block"></div>
        <div className="absolute top-4 right-6 w-40 h-20 bg-[#FCC43E] rounded-tl-2xl rounded-tr-2xl"></div>
      </div>
      <div className="pt-16 pb-6 px-6 mt-4">
        <Heading2 title={name} /><h4 >#{id}</h4> 
        <p className="text-gray-500 text-sm mb-2 font-semibold">{role}</p>
        <div className="flex justify-between flex-wrap gap-2 mb-4">
          <div>
            <p className='text-gray-600 text-sm'>Location:</p>
            <div className="flex items-center text-gray-700 mt-2">
              <IconButton icon={<FaMapMarkerAlt />} backgroundColor='#F97316' iconColor="white" />
              <span className='font-semibold text-indigo-900 ml-2 text-sm'>{location}, {district}</span>
            </div>
          </div>
          <div className='m-0'>
            <p className='text-gray-600 text-sm'>Address:</p>
            <div className="flex items-center text-gray-700 mt-2">
              <IconButton icon={<FaMapMarkerAlt />} backgroundColor='#F97316' iconColor="white" />
              <span className='font-semibold text-indigo-900 ml-2 text-sm'>{address}</span>
            </div>
          </div>
          <div className='m-0'>
            <p className='text-gray-600 text-sm'>Phone:</p>
            <div className="flex items-center text-gray-700 mt-2">
              <IconButton icon={<FaPhoneAlt />} backgroundColor='#F97316' iconColor="white" />
              <span className='font-semibold text-indigo-900 ml-2 text-sm'>{phone}</span>
            </div>
          </div>
          <div className='m-0'>
            <p className='text-gray-600 text-sm'>Email:</p>
            <div className="flex items-center text-gray-700 mt-2">
              <IconButton icon={<FaEnvelope />} backgroundColor='#F97316' iconColor="white" />
              <span className='font-semibold text-indigo-900 ml-2 text-sm'>{email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
