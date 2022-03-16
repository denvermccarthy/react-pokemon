import React, { useEffect, useState } from 'react';
import Controls from '../../Controls/Controls';
import Page from '../../Controls/Page/Page';
import {
  fetchPokemon,
  fetchPokemonByPage,
  fetchPokemonByQuery,
  fetchPokemonByType,
  fetchPokemonTypes,
} from '../../services/fetchpoke';

export default function Main() {
  const [data, setData] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('');
  const [page, setPage] = useState(1);

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

  useEffect(() => {
    const fetch = async () => {
      const fetchedByPage = await fetchPokemonByPage(page);
      setData(fetchedByPage);
    };
    fetch();
  }, [page]);

  return (
    <div>
      <Controls {...{ types, setSelectedType, selectedType, query, setQuery }} />
      {data.map((item) => (
        <div key={item._id}>
          {`Name: ${item.pokemon}    
          Type: ${item.type_1}    
          `}
        </div>
      ))}
      <Page {...{ setPage, page }} />
    </div>
  );
}
