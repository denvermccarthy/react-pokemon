import React, { useEffect, useState } from 'react';
import Controls from '../../Controls/Controls';
import Page from '../../Controls/Page/Page';
import {
  fetchPokemon,
  fetchPokemonByPage,
  fetchPokemonByQuery,
  fetchPokemonByType,
  fetchPokemonTest,
  fetchPokemonTypes,
} from '../../services/fetchpoke';

export default function Main() {
  const [data, setData] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const typeData = await fetchPokemonTypes();
      setTypes(typeData);
      const fetchedByType = await fetchPokemonTest(selectedType, order, page, query);
      setCount(fetchedByType.count);
      setData(fetchedByType.results);
    };
    fetch();
  }, [selectedType, order, page, query]);

  return (
    <div>
      <Controls {...{ types, setSelectedType, selectedType, query, setQuery, setOrder, setPage }} />
      {data.map((item) => (
        <div key={item._id}>
          {`Name: ${item.pokemon}    
          Type: ${item.type_1} ${item.type_2}    
          `}
        </div>
      ))}
      <Page {...{ setPage, page, count }} />
    </div>
  );
}
