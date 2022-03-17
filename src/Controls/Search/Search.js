import React from 'react';

export default function Search({ query, setQuery }) {
  return (
    <input
      value={query}
      type="text"
      placeholder="Search for a Pokemon here.."
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
