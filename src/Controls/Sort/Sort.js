import React from 'react';

export default function Sort({ setOrder }) {
  return (
    <div onChange={(e) => setOrder(e.target.value)}>
      <input type="radio" name="button" value="asc" defaultChecked />
      Ascending
      <input type="radio" name="button" value="desc" />
      Descending
    </div>
  );
}
