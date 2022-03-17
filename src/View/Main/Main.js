import React, { useEffect, useState } from 'react';
import List from '../../Components/List/List';
import Controls from '../../Controls/Controls';
import Page from '../../Controls/Page/Page';
import { fetchPokemon, fetchPokemonTypes } from '../../services/fetchpoke';
import './Main.css';

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
      const fetchedByType = await fetchPokemon(selectedType, order, page, query);
      setCount(fetchedByType.count);
      setData(fetchedByType.results);
    };
    fetch();
  }, [selectedType, order, page, query]);

  return (
    <div className="main">
      <Controls {...{ types, setSelectedType, selectedType, query, setQuery, setOrder, setPage }} />
      <List {...{ data }} />
      <Page {...{ setPage, page, count }} />
    </div>
  );
}
