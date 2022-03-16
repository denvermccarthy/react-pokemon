import React from 'react';
import Search from './Search/Search';
import Sort from './Sort/Sort';

export default function Controls({ types, setSelectedType, selectedType, query, setQuery }) {
  return (
    <div>
      <Sort {...{ types, setSelectedType, selectedType }} />
      <Search {...{ query, setQuery }} />
    </div>
  );
}
