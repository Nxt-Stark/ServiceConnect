import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './menus/dashboard';
import Users from './menus/users';
import ServiceProviders from './menus/servicepro';
import Franchisee from './menus/franchesee';
import Finance from './menus/finance';
import Accounts from './menus/account';
import Profile from './menus/profile';
import Chat from './menus/chats';
import Settings from './menus/settings';
import ServiceManagement from './menus/servicemanagment';
import AdsManagement from './menus/ads';
import Notifications from './menus/notifications';
import StudentDetailsForm from './components/StudentDetailsForm'; 
import UserTable from './components/UserTable';
import UserDetail from './components/UserDetail';

function App() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  return (
    <div className="flex min-h-screen">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:userId" element={<UserDetail />} />
          <Route path="/new-user" element={<StudentDetailsForm />} />
          <Route path="/service-providers" element={<ServiceProviders />} />
          <Route path="/franchisee" element={<Franchisee />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/service-management" element={<ServiceManagement />} />
          <Route path="/ads-management" element={<AdsManagement />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

