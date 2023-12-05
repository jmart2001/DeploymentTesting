// SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      if (!searchTerm.trim()) {
        // Don't perform search if the trimmed search term is empty
        return;
      }
  
      // Replace spaces with underscores in the search term
      const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, '_');
  
      const response = await axios.get(`${process.env.PUBLIC_URL}/Products/${formattedSearchTerm.toLowerCase()}_prices.json`);
      const data = response.data.data; // Adjust the structure based on your JSON format
  
      onSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      onSearchResults([]); // Clear the results in case of an error
    }
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;




