import React, { useState, useEffect, useRef } from 'react';
import Pagination from './Pagination';
import UserInfoModal from './UserInfoModal';

const users = [
  { name: 'Samanta William', id: '#123456789', date: 'March 25, 2021', services: 2, location: 'Jakarta', status: 'Not Active', image: 'https://cdn.prod.website-files.com/5f5ccfa306240b2871494d94/5f5ccfa306240b74ac494ef6_Team-01.png' },
  { name: 'Tony Soap', id: '#123456790', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Active', image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Tony_Soprano_2.jpg'  },
  { name: 'Karen hope', id: '#123456791', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Active', image: 'https://yt3.googleusercontent.com/ytc/AIdro_ncL52R3EiZx6XBJbcW8n9yb4xZ-O1UjVxX1IY2iLDIHQ=s900-c-k-c0x00ffffff-no-rj' },
  { name: 'Joerdan Nico', id: '#123456792', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xrSwcRRowWl_YZmh7AGihsPFqV3-uBXdIA&s' },
  { name: 'Nadila Adja', id: '#123456793', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Not Active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5J09363KKG3V8HilAtH8Ug5NHVAAsjksE2A&s'  },
  { name: 'Johnny Ahmed', id: '#123456794', date: 'March 25, 2021', services: 10, location: 'Jakarta', status: 'Active', image: 'https://i.pinimg.com/736x/b3/b3/d4/b3b3d4f610d7fda937764c62de0f0abd.jpg'  },
  { name: 'Karen hope', id: '#123456791', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Active', image: 'https://yt3.googleusercontent.com/ytc/AIdro_ncL52R3EiZx6XBJbcW8n9yb4xZ-O1UjVxX1IY2iLDIHQ=s900-c-k-c0x00ffffff-no-rj' },
  { name: 'Joerdan Nico', id: '#123456792', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xrSwcRRowWl_YZmh7AGihsPFqV3-uBXdIA&s' },
  { name: 'Nadila Adja', id: '#123456793', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Not Active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5J09363KKG3V8HilAtH8Ug5NHVAAsjksE2A&s'  },
  { name: 'Johnny Ahmed', id: '#123456794', date: 'March 25, 2021', services: 10, location: 'Jakarta', status: 'Active', image: 'https://i.pinimg.com/736x/b3/b3/d4/b3b3d4f610d7fda937764c62de0f0abd.jpg'  },
  { name: 'Karen hope', id: '#123456791', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Active', image: 'https://yt3.googleusercontent.com/ytc/AIdro_ncL52R3EiZx6XBJbcW8n9yb4xZ-O1UjVxX1IY2iLDIHQ=s900-c-k-c0x00ffffff-no-rj' },
  { name: 'Joerdan Nico', id: '#123456792', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xrSwcRRowWl_YZmh7AGihsPFqV3-uBXdIA&s' },
  { name: 'Nadila Adja', id: '#123456793', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Not Active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5J09363KKG3V8HilAtH8Ug5NHVAAsjksE2A&s'  },
  { name: 'Johnny Ahmed', id: '#123456794', date: 'March 25, 2021', services: 10, location: 'Jakarta', status: 'Active', image: 'https://i.pinimg.com/736x/b3/b3/d4/b3b3d4f610d7fda937764c62de0f0abd.jpg'  },

];


function UserTable() {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null); // State for the selected user
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const modalRef = useRef(null); // Ref for the UserInfoModal

  const rowsPerPage = 5;
  const totalPages = Math.ceil(users.length / rowsPerPage);

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

  const handleView = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the dropdown if clicked outside
      if (openDropdownId && !event.target.closest('.dropdown')) {
        setOpenDropdownId(null);
      }
      
      // Close the modal if clicked outside
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
                <img src={user.image} alt="User" className="w-8 h-8 rounded-full sm:w-10 sm:h-10" />
                {user.name}
              </td>
              <td className="p-3 text-indigo-700 hidden md:table-cell">{user.id}</td>
              <td className="p-3 text-gray-500 text-xs sm:text-sm hidden sm:table-cell">{user.date}</td>
              <td className="p-3 text-center hidden sm:table-cell">{user.services}</td>
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
                      <li onClick={() => handleView(user)} className="p-2 hover:bg-gray-100 cursor-pointer text-sm">View</li>
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

      {isModalOpen && (
        <div ref={modalRef}>
          <UserInfoModal user={selectedUser} onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
}
  
  export default UserTable;