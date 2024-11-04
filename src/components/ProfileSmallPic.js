import React from 'react';

const ProfileSmallPic = ({ imageUrl }) => (
  <div className="w-14 h-14 bg-gray-300 rounded-full border-4 border-white relative overflow-hidden">
    <img
      src={imageUrl}
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
);

export default ProfileSmallPic;
