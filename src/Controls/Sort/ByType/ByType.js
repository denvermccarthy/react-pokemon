import React from 'react';

export default function ByType({ types }) {
  return (
    <select>
      {types.map((item) => (
        <option key={item.type} value={item.type}>
          {`${item.type} (${item.count})`}
        </option>
      ))}
    </select>
  );
}
