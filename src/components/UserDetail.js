import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heading2 } from './heading';
import Card from './Card';
import PaymentHistory from './PaymentHistory';
import RecentActivities from './RecentActivities';

function UserDetail() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    setLoading(true);

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = storedUsers.find((user) => String(user.id) === String(userId));

    console.log(userId);

    if (foundUser) {
      setUser(foundUser);
      setLoading(false);
    } else {
      setError('User not found');
      setLoading(false);
    }
  }, [userId]);

  if (loading) return <p className='ml-64'>Loading user details...</p>;
  if (error) return <p className='ml-64'>{error}</p>;
  if (!user) return <p className='ml-64'>No user selected</p>;

  return (
    <div className="sm:ml-0 mt-12 md:mt-0 md:ml-64 mx-auto relative">
      <Heading2 title="User Details" />

      
      <div className="flex flex-col lg:flex-row gap-5 mt-4">
        <div className="flex flex-col gap-5 sm:gap-5 justify-between lg:w-2/3">
        <Card 
          profileImage={user.imageUrl}
          name={user.fullName}
          id={user.id}
          role="User"
          location={user.address}
          address={user.houseName}
          phone={user.phone}
          email={user.email}
        />
          <PaymentHistory totalData={100} dataPerPage={5} />
        </div>
        <div className="lg:w-1/3">
          <RecentActivities />
        </div>
      </div>
      
    </div>
  );
}

export default UserDetail;

