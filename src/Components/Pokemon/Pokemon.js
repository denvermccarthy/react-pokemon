import './Pokemon.css';
import React from 'react';
import skyBG from '../../sky-background.png';

export default function Pokemon({
  name,
  ability_1,
  ability_2,
  hp,
  atk,
  def,
  color,
  pokedex,
  type_1,
  image,
}) {
  return (
    <div className="container" style={{ backgroundColor: `${color}` }}>
      <div className="Abilities">
        Special Ability: {ability_1} <br />
        Attack: {atk} Defense:{def}
      </div>
      <div className="Stats">Type: {type_1}</div>
      <div className="Title">
        {name} {hp}HP
      </div>
      <div
        className="Image"
        style={{
          background: `url(${image}) center / contain no-repeat, url(${skyBG}) center `,
        }}
      ></div>
    </div>
  );
}
