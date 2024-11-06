import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { userId } = useParams();
  console.log("User ID:", userId);  // Check if this logs the correct ID

  if (!userId) return <p className='ml-64'>No user selected</p>; // Optional fallback

  return <div className='ml-64'>Details for user {userId}</div>;
}

export default UserDetail;
