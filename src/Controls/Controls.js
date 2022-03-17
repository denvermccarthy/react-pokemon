import React from 'react';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import Sort from './Sort/Sort';

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
    <div>
      <Filter {...{ types, setSelectedType, selectedType, setPage }} />
      <Search {...{ query, setQuery }} />
      <Sort {...{ setOrder }} />
    </div>
  );
}
