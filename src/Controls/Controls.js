import React from 'react';
import Sort from './Sort/Sort';

export default function Controls({ types }) {
  return (
    <div>
      <Sort {...{ types }} />
    </div>
  );
}
