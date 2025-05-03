import React, { useState } from 'react';
import { data } from '../data/navigationbar';
import { Outlet, Link } from "react-router-dom";

const Account_DM = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="dropdown-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="dropdown-button">
        {data.images.filter(item => item.id == 1).map(image => (
          <img key={image.id} src={image.image} alt={image.id} />
        ))}
      </button>
      
      {isOpen && (
        <div className="dropdown-menu-l" class='grid bg-white mr-[20px]'>
            <Link className='menu-item-acc' to="/login">Login</Link>
            <Link className='menu-item-acc' to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Account_DM;