import React, { useState } from 'react';
import axios from 'axios';

const PhotoUpload = ({ onUpload }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageName, setImageName] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [imageLink, setImageLink] = useState('');

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageName(file.name);
      await uploadImage(file);
    }
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setImageName(file.name); 
      await uploadImage(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const uploadImage = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'default_preset'); 

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dhxox5pnl/image/upload', 
        formData
      );
      const url = response.data.secure_url;
      setImageUrl(url);
      setImageLink(url);
      onUpload(url); 

      console.log('Image uploaded successfully:', url); 
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="text-sm font-semibold text-gray-600 mb-1">Photo *</label>
      <div
        className="w-full cursor-pointer h-36 border-2 p-4 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById('file-input').click()}
      >
        {loading ? (
          'Uploading...'
        ) : imageUrl ? (
          <img src={imageUrl} alt="Uploaded" className="h-full object-cover rounded-lg" />
        ) : (
          'Drag and drop or click here to select file'
        )}
      </div>
      {imageName && <p className="text-sm text-green-600 mt-2">{imageName}</p>} 
      <input
        id="file-input"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default PhotoUpload;
