import React from "react";

const ProfilePicture = ({ src, alt }) => (
  <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-white relative overflow-hidden">
    <img
      src={src}
      alt="profile"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
);

export default ProfilePicture;
