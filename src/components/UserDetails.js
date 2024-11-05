import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userData = storedUsers.find((user) => user.id === id);
    setUser(userData);
  }, [id]);

  if (!user) return <p>Loading user details...</p>;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
      <img src={user.image} alt="User" className="w-24 h-24 rounded-full mb-4" />
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Date:</strong> {user.date}</p>
      <p><strong>Location:</strong> {user.location}</p>
      <p><strong>Status:</strong> {user.status}</p>
      <button 
        onClick={() => navigate(-1)} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Back
      </button>
    </div>
  );
}

export default UserDetails;
