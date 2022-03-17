import React from 'react';

export default function KeyDropdown({ setter }) {
  return (
    <select onChange={(e) => setter(e.target.value)}>
      <option value="pokemon">Pokemon</option>
      <option value="height">Height</option>
      <option value="weight">Weight</option>
      <option value="base_experience">XP</option>
      <option value="type">Type</option>
      <option value="attack">Attack</option>
      <option value="defense">Defense</option>
      <option value="hp">HP</option>
      <option value="special_attack">Special Attack</option>
      <option value="special_defense">Special Defense</option>
      <option value="speed">Speed</option>
      <option value="ability">Ability</option>
      <option value="eggGroup">Egg Group</option>
    </select>
  );
}
