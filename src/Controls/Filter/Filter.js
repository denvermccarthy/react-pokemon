import React from 'react';
import ByType from './ByType/ByType';

export default function Sort({ types, setSelectedType, selectedType, setPage }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-filter"
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
      </svg>

      <ByType {...{ types, setSelectedType, selectedType, setPage }} />
    </div>
  );
}
