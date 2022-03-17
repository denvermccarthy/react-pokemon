import React from 'react';
import './Sort.css';

export default function Sort({ setOrder }) {
  return (
    <div className="order-wrap">
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
