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
}) {
  return (
    <div className="controls">
      <Filter {...{ types, setSelectedType, selectedType, setPage }} />
      <Search {...{ query, setQuery }} />
      <Sort {...{ setOrder }} />
    </div>
  );
}
