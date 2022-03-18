import React from 'react';
import KeyDropdown from '../KeyDropdown/KeyDropdown';
import './Sort.css';

export default function Sort({ setOrder, setSortKey }) {
  return (
    <div className="order-wrap">
      <KeyDropdown setter={setSortKey} />
      <div className="order" onChange={(e) => setOrder(e.target.value)}>
        Order:
        <label>
          <input type="radio" name="button" value="asc" defaultChecked />
          &#9650;
        </label>
        <label>
          <input type="radio" name="button" value="desc" />
          &#9660;
        </label>
      </div>
    </div>
  );
}
