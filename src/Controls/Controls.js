import React from 'react';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import Sort from './Sort/Sort';

export default function Controls({ types, setSelectedType, selectedType, query, setQuery }) {
  return (
    <div>
      <Filter {...{ types, setSelectedType, selectedType }} />
      <Search {...{ query, setQuery }} />
      <Sort />
    </div>
  );
}
