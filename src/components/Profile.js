import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return null;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-50">
      {/* Profile picture button */}
      <button onClick={toggleDropdown} className="focus:outline-none">
        <img
          src={user.picture}
          alt={user.name}
          className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500"
        />
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-4 text-sm text-gray-800 dark:text-gray-200">
            <h2 className="font-semibold truncate">{user.name}</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
          </div>
        </div>
      )}

      {/* Click outside to close (optional improvement) */}
      {isDropdownOpen && (
        <div onClick={closeDropdown} className="fixed inset-0 z-40" />
      )}
    </div>
  );
};

export default Profile;
