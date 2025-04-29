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
        <div className="dropdown-menu" style={{ backgroundColor: '#1E90FF' }}>
          <button className="menu-item">Login</button>
          <button className="menu-item">Регистрация</button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;