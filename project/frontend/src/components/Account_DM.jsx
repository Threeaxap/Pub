import React, { useState } from 'react';
import { navbar } from '../data/navigationbar';

const Account_DM = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="dropdown-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="dropdown-button">Category_3</button>
      
      {isOpen && (
        <div className="dropdown-menu">
            {navbar.filter(item => item.id > 6).map(button => (
                <button key={button.id}>
                    {button.name}
                </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default Account_DM;