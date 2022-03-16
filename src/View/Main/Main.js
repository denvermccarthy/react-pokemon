import React, { useEffect, useState } from 'react';
import { fetchPokemon } from '../../services/fetchpoke';

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const pokeData = await fetchPokemon();
      setData(pokeData);
    };
    fetch();
  }, []);

  return <div>Main</div>;
}
