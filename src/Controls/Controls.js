import React from 'react';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import './Controls.css';

export default function Controls({
  types,
  setSelectedType,
  selectedType,
  query,
  setQuery,
  setOrder,
  setPage,
  debouncedQuery,
  setDebouncedQuery,
  setSortKey,
  setSearchKey,
}) {
  return (
    <div className="controls">
      <Filter {...{ types, setSelectedType, selectedType, setPage }} />
      <Search {...{ query, setQuery, debouncedQuery, setDebouncedQuery, setSearchKey }} />
      <Sort {...{ setOrder, setSortKey }} />
    </div>
  );
}
