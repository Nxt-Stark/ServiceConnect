import React from "react";
import { Heading, Heading2 } from "../components/heading";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import IconButton from "../components/IconButton";
import BalanceAnalytics from '../components/BalanceAnalytics';
import { FiSettings, FiBell } from "react-icons/fi";
import InfoCard from "../components/InfoCard";
import {
  FaUser,
  FaBriefcase,
  FaComment,
  FaServer,
  FaAd,
  FaBook,
  FaCoins,
  FaRocket,
} from "react-icons/fa";
import ActivityList from "../components/ActivityList";
import ServiceCategories from "../components/ServiceCategories";
import DataTable from "../components/DataTable";
import FranchiseeCard from "../components/FranchiseeCard";
import RecentActivities from "../components/RecentActivities";
import PaymentHistory from "../components/PaymentHistory";
import ProfileSmallPic from "../components/ProfileSmallPic";

function Franchisee() {
  const activities = [
    { name: "Samantha William", location: "Kochi", time: "12:45 PM" },
  ];
  const serviceCategories = ["Mechanic", "House Keeping", "Laundry"];
  const bookings = [["Samantha W.", "ID 123456789", "$50,036"]];

  return (
    <div className="lg:ml-64 pt-1 px-4">
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          <Heading title="Franchisee Dashboard" />

          <div className="flex-1 md:mx-4">
            <SearchBar placeholder="Search here..." width="w-full" />
          </div>

          <div className="flex items-center justify-center space-x-4 md:justify-end">
            <IconButton icon={<FiBell />} />
            <IconButton icon={<FiSettings />} />

            <div className="flex items-center space-x-2">
              <div className="flex flex-col">
                <span className="text-sm text-indigo-900 md:block font-semibold">
                  Leonal Messi
                </span>
                <span className="text-xs text-gray-400 md:block">Admin</span>
              </div>
              <ProfileSmallPic imageUrl="https://scontent.fccj8-1.fna.fbcdn.net/v/t39.30808-6/459890464_969196978572156_1561397540353314819_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JVU7Bh_U8d4Q7kNvgFLTpvQ&_nc_zt=23&_nc_ht=scontent.fccj8-1.fna&_nc_gid=AXs7A2FBDOlsH39DqBUkzrk&oh=00_AYAC11QYFfTHTc7qbhQkGupdRUjcVjK9iNOGel735ELiyg&oe=672AC168" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        <InfoCard
          title="Total Service Providers"
          value="932"
          percentage={10}
          icon={<FaUser />}
          background="indigo"
        />
        <InfoCard
          title="Total Dealers"
          value="754"
          percentage={-0.5}
          icon={<FaBriefcase />}
          background="blue"
        />
        <InfoCard
          title="Total Services"
          value="932"
          percentage={10}
          icon={<FaServer />}
          background="green"
        />
        <InfoCard
          title="Complaints"
          value="754"
          percentage={-0.5}
          icon={<FaComment />}
          background="red"
        />
        <InfoCard
          title="Total Ads"
          value="932"
          percentage={10}
          icon={<FaAd />}
          background="#6A5B5A"
        />
        <InfoCard
          title="Registration Earning"
          value="754"
          percentage={-0.5}
          icon={<FaBook />}
          background="#6A1B2A"
        />
        <InfoCard
          title="Commission Earning"
          value="932"
          percentage={10}
          icon={<FaCoins />}
          background="#4A5B7A"
        />
        <InfoCard
          title="Ads Earnings"
          value="754"
          percentage={-0.5}
          icon={<FaRocket />}
          background="orange"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-5 sm:gap-5 justify-between lg:w-2/3">
          <FranchiseeCard />
          <PaymentHistory totalData={100} dataPerPage={5} />
        </div>
        <div className="lg:w-1/3">
          <RecentActivities />
        </div>
      </div>
      <div className="mt-6">
      <BalanceAnalytics /></div>
      <div className="mt-6 flex gap-6">
      <PaymentHistory totalData={100} dataPerPage={5} />
      <PaymentHistory totalData={100} dataPerPage={5} />
      </div>
      {/* <div className="grid grid-cols-2 gap-6">
        <Calendar />
        <ActivityList title="Recent Activities" items={activities} />
        <ServiceCategories categories={serviceCategories} />
        <DataTable title="Incomplete Bookings" headers={['Name', 'ID', 'Amount']} rows={bookings} />
      </div> */}
    </div>
  );
}

export default Franchisee;
