import React from 'react';
import ByType from './ByType/ByType';

export default function Sort({ types, setSelectedType, selectedType, setPage }) {
  return (
    <div>
      <ByType {...{ types, setSelectedType, selectedType, setPage }} />
    </div>
  );
}
