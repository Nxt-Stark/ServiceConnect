import React from 'react';
import Heading from '../components/heading';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import IconButton from '../components/IconButton';
import { FiSettings, FiBell } from 'react-icons/fi';
import InfoCard from '../components/InfoCard';
import { FaUser, FaBriefcase } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="lg:ml-64 pt-1">
      <Heading title="Dashboard" />
      <SearchBar placeholder="Search here..." width="w-1/3" />
      <Pagination totalData={100} dataPerPage={5} />
    <div>
      <IconButton icon={<FiSettings />} />

      <IconButton icon={<FiBell />}/>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <InfoCard
        title="Total Service Providers"
        value="932"
        percentage={10}
        icon={<FaUser />}
        color="#6A38C2"
      />
      <InfoCard
        title="Total Dealers"
        value="754"
        percentage={-0.5}
        icon={<FaBriefcase />}
        color="#FF5D35"
      />
      <InfoCard
        title="Total Dealers"
        value="754"
        percentage={-0.5}
        icon={<FaBriefcase />}
        color="#FF5D35"
      />
      <InfoCard
        title="Total Dealers"
        value="754"
        percentage={-0.5}
        icon={<FaBriefcase />}
        color="#FF5D35"
      />
      {/* Add more InfoCard components as needed */}
    </div>
    </div>
  );
}

export default Dashboard;
