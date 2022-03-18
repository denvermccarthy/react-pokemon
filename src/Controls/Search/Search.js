import React, { useEffect } from 'react';
import KeyDropdown from '../KeyDropdown/KeyDropdown';
// import search from '../../search.svg';

export default function Search({ setQuery, debouncedQuery, setDebouncedQuery, setSearchKey }) {
  useEffect(() => {
    const timer = setTimeout(() => setQuery(debouncedQuery), 500);
    return () => clearTimeout(timer);
  }, [debouncedQuery, setQuery]);
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-search"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>

      <input
        value={debouncedQuery}
        type="text"
        placeholder="Search for a Pokemon here.."
        onChange={(e) => setDebouncedQuery(e.target.value)}
      />
      <KeyDropdown setter={setSearchKey} />
    </div>
  );
}
