import React from 'react';
import { Heading } from '../components/heading'; 
import ProfileSmallPic from '../components/ProfileSmallPic'; 
import { FiSettings, FiBell } from "react-icons/fi";
import IconButton from '../components/IconButton';
import UserStats from '../components/StatCard';
import { MdArrowDropDown } from "react-icons/md";
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import { FaPlus } from 'react-icons/fa';
import UserTable from '../components/UserTable';
import { useNavigate } from 'react-router-dom';

function Users() {
    const navigate = useNavigate();

    const handleNewUserClick = () => {
        navigate('/new-user'); 
    };

    return (
        <div className="lg:ml-64 pt-1">
            <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className='ml-4 mt-1'>
                        <Heading title="User Management" />
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
            <div>
                <UserStats />
            </div>
            <div className='lg:flex justify-between mb-6'>
                <SearchBar placeholder="Search here..." width="w-full lg:w-1/4 md:2/4" />
                <div className="flex gap-4 mt-6 lg:mt-0 justify-center">
                    <div className="flex items-center">
                        <Button variant="outline" className="flex items-center">
                            Newest <MdArrowDropDown className="ml-1 font-bold" />
                        </Button>
                    </div>
                    <Button variant="primary" className="flex items-center" onClick={handleNewUserClick}>
                        <FaPlus className='me-2' />
                        New User
                    </Button>
                </div>
            </div>
            <UserTable /> 
        </div>
    );
}

export default Users;
