import './List.css';
import React from 'react';
import Pokemon from '../Pokemon/Pokemon';

export default function List({ data }) {
  return (
    <div className="list">
      {data.map((item) => (
        <Pokemon
          key={item._id}
          name={item.pokemon}
          ability_1={item.ability_1}
          ability_2={item.ability_2}
          hp={item.hp}
          atk={item.attack}
          def={item.defense}
          color={item.color_1}
          pokedex={item.pokedex}
          type_1={item.type_1}
          image={item.url_image}
        />
      ))}
    </div>
  );
}
