import React, { useState } from 'react';
import PhotoUpload from './PhotoUpload';

const ParentComponent = () => {
  const [photoUrl, setPhotoUrl] = useState('');

  const handlePhotoUpload = (url) => {
    setPhotoUrl(url);
  };

  return (
    <div>
      <PhotoUpload onUpload={handlePhotoUpload} />
      {photoUrl && <p>Uploaded Photo URL: {photoUrl}</p>}
    </div>
  );
};

export default ParentComponent;
