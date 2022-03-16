import React from 'react';
import Sort from './Sort/Sort';

export default function Controls({ types, setSelectedType, selectedType }) {
  return (
    <div>
      <Sort {...{ types, setSelectedType, selectedType }} />
    </div>
  );
}
