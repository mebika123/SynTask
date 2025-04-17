import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const DropDownBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Placeholder handlers
  const handleView = () => {
    alert('View Details clicked');
    setIsOpen(false);
  };

  const handleEdit = () => {
    alert('Edit clicked');
    setIsOpen(false);
  };

  const handleDelete = () => {
    alert('Delete clicked');
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="p-2 hover:bg-gray-100 rounded-full">
        <FontAwesomeIcon icon={faEllipsis} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
          <button onClick={handleView} className="w-full px-4 py-2 text-left hover:bg-gray-100">
            View Details
          </button>
          <button onClick={handleEdit} className="w-full px-4 py-2 text-left hover:bg-gray-100">
            Edit
          </button>
          <button onClick={handleDelete} className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default DropDownBtn;
