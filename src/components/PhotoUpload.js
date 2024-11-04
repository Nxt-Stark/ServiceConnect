import React from 'react';

const PhotoUpload = () => (
  <div className="flex flex-col mb-4">
    <label className="text-sm font-semibold text-gray-600 mb-1">Photo *</label>
    <div className="w-full h-36 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500">
      Drag and drop or click here to select file
    </div>
  </div>
);

export default PhotoUpload;
