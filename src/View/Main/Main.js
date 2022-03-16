import React, { useEffect, useState } from 'react';
import Controls from '../../Controls/Controls';
import {
  fetchPokemon,
  fetchPokemonByQuery,
  fetchPokemonByType,
  fetchPokemonTypes,
} from '../../services/fetchpoke';

export default function Main() {
  const [data, setData] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [query, setQuery] = useState('');

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

  useEffect(() => {
    const fetch = async () => {
      const fetchedByQuery = await fetchPokemonByQuery(query);
      setData(fetchedByQuery);
    };
    fetch();
  }, [query]);

  return (
    <div>
      <Controls {...{ types, setSelectedType, selectedType, query, setQuery }} />
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
