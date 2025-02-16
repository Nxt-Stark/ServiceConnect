import React, { useState } from 'react';
import PhotoUpload from './PhotoUpload';

const ParentComponent = () => {
  const [photoUrl, setPhotoUrl] = useState('');

  const handlePhotoUpload = (url) => {
    setPhotoUrl(url);
    console.log('Uploaded Photo URL:', url); 
  };

  return (
    <div>
      <h1>Photo Upload</h1>
      <PhotoUpload onUpload={handlePhotoUpload} />
      {photoUrl && <p>Uploaded Photo URL: {photoUrl}</p>}
    </div>
  );
};

export default ParentComponent;
