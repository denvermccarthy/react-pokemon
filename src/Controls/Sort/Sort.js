import React from 'react';
import ByType from './ByType/ByType';

export default function Sort({ types }) {
  return (
    <div>
      <ByType types={types} />
    </div>
  );
}
