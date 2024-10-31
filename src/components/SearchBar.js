import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({
  placeholder = "Search here...",
  width = "w-64",
  iconColor = "text-indigo-900",
  onSearch
}) => {
  return (
    <div className={`flex items-center bg-white rounded-full px-6 py-2 ${width}`}>
      <FaSearch className={`${iconColor} mr-2`} />
      <input
  type="text"
  placeholder={placeholder}
  onChange={(e) => onSearch && onSearch(e.target.value)}
  className="bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full placeholder:text-sm"
/>

    </div>
  );
};

export default SearchBar;
