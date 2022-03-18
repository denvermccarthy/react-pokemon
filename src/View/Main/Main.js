import React, { useEffect, useState } from 'react';
import List from '../../Components/List/List';
import Controls from '../../Controls/Controls';
import Page from '../../Controls/Page/Page';
import { fetchPokemon, fetchPokemonTypes } from '../../services/fetchpoke';
import './Main.css';

export default function Main() {
  const [data, setData] = useState([]);
  const [types, setTypes] = useState([]);
  const [searchKey, setSearchKey] = useState('pokemon');
  const [sortKey, setSortKey] = useState('pokemon');
  const [selectedType, setSelectedType] = useState('All');
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const fillType = await fetchPokemonTypes();
      setTypes(fillType);
      const fetchedByType = await fetchPokemon(
        selectedType,
        order,
        page,
        query,
        searchKey,
        sortKey
      );
      setCount(fetchedByType.count);
      setData(fetchedByType.results);
      setLoading(false);
    };
    fetch();
  }, [selectedType, order, page, query, searchKey, sortKey]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="main">
      <Controls
        {...{
          types,
          setSelectedType,
          selectedType,
          query,
          setQuery,
          setOrder,
          setPage,
          debouncedQuery,
          setDebouncedQuery,
          setSearchKey,
          setSortKey,
        }}
      />
      <List {...{ data }} />
      <Page {...{ setPage, page, count }} />
    </div>
  );
}
