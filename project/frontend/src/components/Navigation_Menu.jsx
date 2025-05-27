import React, { useState } from 'react';

const SearchPanel = ({ isOpen }) => {
  if (!isOpen) return null;
  
  return (
    <div style={{
      width: '100%',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <a href="/search/link1" style={{ padding: '10px', color: '#333', textDecoration: 'none' }}>Ссылка 1</a>
        <a href="/search/link2" style={{ padding: '10px', color: '#333', textDecoration: 'none' }}>Ссылка 2</a>
        <a href="/search/link3" style={{ padding: '10px', color: '#333', textDecoration: 'none' }}>Ссылка 3</a>
        <a href="/search/link4" style={{ padding: '10px', color: '#333', textDecoration: 'none' }}>Ссылка 4</a>
      </div>
    </div>
  );
};

const Navigation_Menu = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
        backgroundColor: '#343a40',
        color: 'white'
      }}>
        <button 
          onClick={toggleSearch}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px'
          }}
        >
          <div>
            &#128270;
          </div>
        </button>
      </nav>
      
      <SearchPanel isOpen={searchOpen} />
    </div>
  );
};

export default Navigation_Menu;