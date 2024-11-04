
import React from 'react';
import { Heading, Heading2 } from '../components/heading'; 
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import IconButton from '../components/IconButton';
import { FiSettings, FiBell } from 'react-icons/fi';
import InfoCard from '../components/InfoCard';
import { FaUser, FaBriefcase } from 'react-icons/fa';
import ActivityList from '../components/ActivityList';
import ServiceCategories from '../components/ServiceCategories';
import DataTable from '../components/DataTable';
import StatisticsSummary from '../components/StatisticsSummary';
import PerformanceChart from '../components/PerformanceChart';
import { FaUserTie, FaStore, FaCalendarAlt, FaUtensils } from 'react-icons/fa';

function Dashboard() {
  const sampleChartData = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{ label: 'Dataset 1', data: [10, 20, 30], backgroundColor: '#FF5D35' }],
  };
  const statisticsData = [
    { icon: <FaUserTie />, label: 'Franchisee', value: 932, color: '#6A5ACD' },
    { icon: <FaStore />, label: 'Dealers', value: 754, color: '#FF6347' },
    { icon: <FaCalendarAlt />, label: 'Service Providers', value: 40, color: '#FFD700' },
    { icon: <FaUtensils />, label: 'Users', value: '32k', color: '#4B0082' },
  ];
  
  const activities = [{ name: 'Samantha William', location: 'Kochi', time: '12:45 PM' }];
  const serviceCategories = ['Mechanic', 'House Keeping', 'Laundry'];
  const bookings = [['Samantha W.', 'ID 123456789', '$50,036']];

  return (
    <div className="lg:ml-64 pt-1">
      <Heading title="Dashboard" />
      <div className="flex items-center justify-between mb-4">
        <SearchBar placeholder="Search here..." width="w-1/3" />
        <div>
          <IconButton icon={<FiSettings />} />
          <IconButton icon={<FiBell />} />
        </div>
      </div>
      <Pagination totalData={100} dataPerPage={5} />
      <div className="grid grid-cols-2 gap-4 mb-6">
        <InfoCard title="Total Service Providers" value="932" percentage={10} icon={<FaUser />} color="#6A38C2" />
        <InfoCard title="Total Dealers" value="754" percentage={-0.5} icon={<FaBriefcase />} color="#FF5D35" />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <ActivityList title="Recent Activities" items={activities} />
        <ServiceCategories categories={serviceCategories} />
        <DataTable title="Incomplete Bookings" headers={['Name', 'ID', 'Amount']} rows={bookings} />
      </div>
    </div>
  );
}

export default Dashboard;
