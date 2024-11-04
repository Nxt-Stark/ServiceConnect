// UserInfoModal.js
import React from 'react';

function UserInfoModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-indigo-900 font-bold rounded-full bg-white py-2 px-3"
        >
         ✕
        </button>
        <div className="flex items-center mb-4">
          <img
            src={user.image}
            alt="User"
            className="w-16 h-16 rounded-full mr-4"
          />
          <h2 className="text-xl font-semibold text-indigo-700">{user.name}</h2>
        </div>
        <div className="text-gray-700 space-y-2">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Date:</strong> {user.date}</p>
          <p><strong>Services:</strong> {user.services}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p>
            <strong>Status:</strong> 
            <span className={`ml-2 px-2 py-1 rounded ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {user.status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserInfoModal;
