import React from 'react';
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ProfilePicture from './ProfilePicture';
import { Heading, Heading2 } from '../components/heading'; 
import IconButton from './IconButton';

const FranchiseCard = () => {
  return (
    <div className="w-full mx-auto bg-white rounded-2xl overflow-hidden">
      <div className="relative bg-indigo-900 h-24 flex">
        <div className='mt-5 ml-5'>
          <ProfilePicture src="https://scontent.fccj8-1.fna.fbcdn.net/v/t39.30808-6/459890464_969196978572156_1561397540353314819_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JVU7Bh_U8d4Q7kNvgFLTpvQ&_nc_zt=23&_nc_ht=scontent.fccj8-1.fna&_nc_gid=AXs7A2FBDOlsH39DqBUkzrk&oh=00_AYAC11QYFfTHTc7qbhQkGupdRUjcVjK9iNOGel735ELiyg&oe=672AC168" />
        </div>
        <div className="absolute top-14 right-44 w-36 h-10 bg-[#FB7D5B] rounded-tl-2xl hidden md:block"></div>
        <div className="absolute top-4 right-6 w-40 h-20 bg-[#FCC43E] rounded-tl-2xl rounded-tr-2xl"></div>
      </div>
      <div className="pt-16 pb-6 px-6 mt-4">
        <Heading2 title="Leonal Messi" />
        <p className="text-gray-500 text-sm mb-2 font-semibold">Franchisee</p>
        <div className="flex space-x-4 text-sm mb-6">
          <span className="font-bold text-gray-700">45 days left</span>
          <span className="text-gray-700">Valid up to 12/02/2024</span>
        </div>
        <div className="flex justify-between flex-wrap gap-2 mb-4">
          <div>
            <p className='text-gray-600 text-sm'>Contact Name:</p>
            <div className="flex items-center text-gray-700 mt-2">
              <IconButton icon={<FaUser />} backgroundColor='#F97316' iconColor="white" />
              <span className='font-semibold text-indigo-900 ml-2 text-sm'>Justin Hope</span>
            </div>
          </div>
          <div className='m-0'>
            <p className='text-gray-600 text-sm'>Address:</p>
            <div className="flex items-center text-gray-700 mt-2">
              <IconButton icon={<FaMapMarkerAlt />} backgroundColor='#F97316' iconColor="white" />
              <span className='font-semibold text-indigo-900 ml-2 text-sm'>Jakarta, Indonesia</span>
            </div>
          </div>
          <div className='m-0'>
            <p className='text-gray-600 text-sm'>Phone:</p>
            <div className="flex items-center text-gray-700 mt-2">
              <IconButton icon={<FaPhoneAlt />} backgroundColor='#F97316' iconColor="white" />
              <span className='font-semibold text-indigo-900 ml-2 text-sm'>+12 345 6789 0</span>
            </div>
          </div>
          <div className='m-0'>
            <p className='text-gray-600 text-sm'>Email:</p>
            <div className="flex items-center text-gray-700 mt-2">
              <IconButton icon={<FaEnvelope />} backgroundColor='#F97316' iconColor="white" />
              <span className='font-semibold text-indigo-900 ml-2 text-sm'>Hope@mail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseCard;
