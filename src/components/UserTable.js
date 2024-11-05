import React, { useState, useEffect, useRef } from 'react';
import Pagination from './Pagination';

function UserTable() {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const rowsPerPage = 5;
  const totalPages = Math.ceil(users.length / rowsPerPage);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      const initialUsers = [
        { name: 'Samanta William', id: '#123456789', date: 'March 25, 2021', services: 2, location: 'Jakarta', status: 'Not Active', image: 'https://cdn.prod.website-files.com/5f5ccfa306240b2871494d94/5f5ccfa306240b74ac494ef6_Team-01.png' },
      ];
      setUsers(initialUsers);
      localStorage.setItem("users", JSON.stringify(initialUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(users.map((user) => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const toggleDropdown = (userId) => {
    setOpenDropdownId(openDropdownId === userId ? null : userId);
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers(selectedUsers.includes(userId)
      ? selectedUsers.filter((id) => id !== userId)
      : [...selectedUsers, userId]);
  };


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdownId && !event.target.closest('.dropdown')) {
        setOpenDropdownId(null);
      }
      
      if (isModalOpen && modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdownId, isModalOpen]);

  const paginatedUsers = users.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="bg-white p-6 rounded-2xl overflow-x-auto">
      <table className="w-full border-collapse min-w-[600px] hidden sm:table">
        <thead>
          <tr className="text-blue-900 text-left text-sm sm:text-base">
            <th className="p-3 text-center">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedUsers.length === users.length}
              />
            </th>
            <th className="p-3">Name</th>
            <th className="p-3 hidden md:table-cell">ID</th>
            <th className="p-3 hidden sm:table-cell">Date</th>
            <th className="p-3 text-center hidden sm:table-cell">Services</th>
            <th className="p-3 hidden lg:table-cell">Location</th>
            <th className="p-3 text-center hidden md:table-cell">Contact</th>
            <th className="p-3 text-center">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <tr key={user.id} className="border-t border-gray-200 text-sm sm:text-base">
              <td className="p-3 text-center">
                <input
                  type="checkbox"
                  onChange={() => handleSelectUser(user.id)}
                  checked={selectedUsers.includes(user.id)}
                />
              </td>
              <td className="p-3 flex items-center gap-3 font-bold text-indigo-700">
                <img src={user.imageUrl} alt="User" className="w-8 h-8 rounded-full sm:w-10 sm:h-10" />
                {user.name}
              </td>
              <td className="p-3 text-indigo-700 hidden md:table-cell">{user.id}</td>
              <td className="p-3 text-gray-500 text-xs sm:text-sm hidden sm:table-cell">{user.date}</td>
              <td className="p-3 text-center hidden sm:table-cell">{user.service}</td>
              <td className="p-3 hidden lg:table-cell">{user.location}</td>
              <td className="p-3 text-center hidden md:table-cell">
                <button className="px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">
                  <i className="bi bi-telephone"></i>
                </button>
                <button className="px-2 p-1 ml-2 rounded-full bg-indigo-100 text-indigo-700">
                  <i className="bi bi-envelope"></i>
                </button>
              </td>
              <td className="p-3 text-center">
                <span
                  className={`py-1 px-2 rounded-md text-xs sm:text-sm ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                >
                  {user.status}
                </span>
              </td>
              <td className="p-3 text-center relative dropdown">
                <button className="text-gray-600" onClick={() => toggleDropdown(user.id)}>•••</button>
                
                {openDropdownId === user.id && (
                  <div className="absolute right-20 bottom-2 mt-2 w-32 bg-white shadow border rounded-xl z-50">
                    <ul>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer text-sm">View</li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer text-sm">Edit</li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer text-sm">Delete</li>
                    </ul>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='mt-2'>
        <Pagination totalData={users.length} dataPerPage={rowsPerPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default UserTable;
