import React, { useEffect, useState } from 'react';
import Controls from '../../Controls/Controls';
import { fetchPokemon, fetchPokemonByType, fetchPokemonTypes } from '../../services/fetchpoke';

export default function Main() {
  const [data, setData] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    const fetch = async () => {
      const pokeData = await fetchPokemon();
      setData(pokeData);
      const typeData = await fetchPokemonTypes();
      setTypes(typeData);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      if (selectedType === 'All') {
        const pokeData = await fetchPokemon();
        setData(pokeData);
      } else {
        const fetchedByType = await fetchPokemonByType(selectedType);
        setData(fetchedByType);
      }
    };
    fetch();
  }, [selectedType]);

  return (
    <div>
      <Controls {...{ types, setSelectedType, selectedType }} />
      {data.map((item) => (
        <div key={item._id}>
          {`${item.pokemon}    
          ${item.type_1}    
          ${item.type_2}`}
        </div>
      ))}
    </div>
  );
}
