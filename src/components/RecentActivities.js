import React from 'react';
import ProfileSmallPic from './ProfileSmallPic';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

const RecentActivities = () => {
  const activities = [
    {
      type: 'New Service Registration',
      date: 'March 20, 2021',
      time: '09:00 - 10:00 AM',
      details: "Rakavan",
      sub: 'Tap Work',
      color: '#3b82f6', 
    },
    {
      type: 'New Ad Posted',
      date: 'March 20, 2021',
      time: '09:00 - 10:00 AM',
      details: 'Rakavan',
      sub: '50% off',
      color: '#ef4444', 
    },
    {
      type: 'New Service Registration',
      date: 'March 20, 2021',
      time: '09:00 - 10:00 AM',
      details: 'Rakavan',
      sub: 'Tap Work',
      color: '#f59e0b',
    },
    {
      type: 'New Service Registration',
      date: 'March 20, 2021',
      time: '09:00 - 10:00 AM',
      details: 'Rakavan',
      sub: 'Tap Work',
      color: '#3b82f6',
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="p-6 rounded-2xl bg-white mb-3">
        <h3 className="text-xl font-bold mb-2 text-indigo-900">Recent Activities</h3>
        <p className="text-sm text-gray-400">Thursday, 10th April, 2021</p>
      </div>
      <div className="space-y-3 mb-2">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start bg-white rounded-xl space-x-4 h-36 pr-4"
          >
            <div
              className="h-full p-0 m-0 w-4 rounded-l-xl bg-gray-600"
              style={{ backgroundColor: activity.color }}
            ></div>
            <div className="flex-1 m-4">
              <p className="font-medium font-semibold text-indigo-900 mb-2">
                {activity.type}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span className="flex items-center space-x-1">
                  <FaRegCalendarAlt style={{ color: "orange", marginRight: '8px' }} />
                  <span>{activity.date}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <FaRegClock style={{ color: "orange", marginRight: '8px' }} />
                  <span>{activity.time}</span>
                </span>
              </div>
              <div className="flex gap-5">
                <ProfileSmallPic imageUrl="https://scontent.fccj8-1.fna.fbcdn.net/v/t39.30808-6/459890464_969196978572156_1561397540353314819_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JVU7Bh_U8d4Q7kNvgFLTpvQ&_nc_zt=23&_nc_ht=scontent.fccj8-1.fna&_nc_gid=AXs7A2FBDOlsH39DqBUkzrk&oh=00_AYAC11QYFfTHTc7qbhQkGupdRUjcVjK9iNOGel735ELiyg&oe=672AC168" />
                <div className="flex flex-col justify-center gap-1">
                  <p className="text-sm text-gray-400">{activity.details}</p>
                  <p className="text-sm text-gray-400">{activity.sub}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-3 font-semibold text-indigo-900 bg-indigo-100 rounded-full hover:bg-indigo-300">
        View More
      </button>
    </div>
  );
};

export default RecentActivities;
