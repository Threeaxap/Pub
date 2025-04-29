import React, { useState } from 'react';


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="dropdown-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="dropdown-button">Меню</button>
      
      {isOpen && (
        <div className="dropdown-menu">
          1
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;