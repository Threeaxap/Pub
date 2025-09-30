import React, { useState } from 'react';
import './SearchTest.css';

const SearchBar = ({ onSearch, placeholder = "Search..." }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const clearSearch = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
        />
        {query && (
          <button
            type="button"
            className="clear-button"
            onClick={clearSearch}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;