import React, { useState } from 'react';
import { data } from '../data/navigationbar';

const Cat_1_DM = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="dropdown-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="dropdown-button">Category_1</button>
      
      {isOpen && (
        <div className="dropdown-menu">
          {data.navbar.filter(item => item.id < 4).map(button => (
                      <button className='menu-item' key={button.id}>
                        {button.name}
                      </button>
                    ))}
        </div>
      )}
    </div>
  );
};

export default Cat_1_DM;