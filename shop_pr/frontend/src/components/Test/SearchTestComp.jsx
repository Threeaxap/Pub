import React, { useState } from 'react';
import SearchBar from './SearchTest.css';
import AdvancedSearchBar from './AdvancedSearchBar';
import IconSearchBar from './IconSearchBar';

const SearchTestComp = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Basic search handler
  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Implement your search logic here
  };

  // Advanced search with API integration
  const handleAdvancedSearch = async (query) => {
    console.log('Advanced search:', query);
    
    // Simulate API call for suggestions
    if (query.length > 2) {
      const mockSuggestions = [
        `${query} option 1`,
        `${query} option 2`,
        `Related ${query}`,
        `${query} advanced`
      ];
      setSuggestions(mockSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="app">
      <h2>Basic Search Bar</h2>
      <SearchBar 
        onSearch={handleSearch}
        placeholder="Search products..."
      />

      <h2>Advanced Search Bar</h2>
      <AdvancedSearchBar 
        onSearch={handleAdvancedSearch}
        placeholder="Search with suggestions..."
        debounceDelay={500}
        showSuggestions={true}
        suggestions={suggestions}
      />

      <h2>Icon Search Bar</h2>
      <IconSearchBar 
        onSearch={handleSearch}
        placeholder="Click icon to search..."
        size="medium"
      />
    </div>
  );
};

export default SearchTestComp;