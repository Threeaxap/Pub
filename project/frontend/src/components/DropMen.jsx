import React, { useState } from 'react';


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="dropdown-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="">Меню</button>
      
      {isOpen && (
        <div className="drop-scroll">
          
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;