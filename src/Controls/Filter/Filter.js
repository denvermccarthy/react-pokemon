import React from 'react';
import ByType from './ByType/ByType';

export default function Sort({ types, setSelectedType, selectedType }) {
  return (
    <div>
      <ByType {...{ types, setSelectedType, selectedType }} />
    </div>
  );
}
