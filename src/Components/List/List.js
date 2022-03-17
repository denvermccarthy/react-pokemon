import './List.css';
import React from 'react';
import Pokemon from '../Pokemon/Pokemon';

export default function List({ data }) {
  return (
    <div className="list">
      {data.map((item) => (
        <Pokemon key={item._id} />
      ))}
    </div>
  );
}
