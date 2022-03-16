import React from 'react';

export default function ByType({ types, setSelectedType, selectedType }) {
  return (
    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
      <option value={'All'}>All</option>
      {types.map((item) => (
        <option key={item.type} value={item.type}>
          {`${item.type} (${item.count})`}
        </option>
      ))}
    </select>
  );
}
