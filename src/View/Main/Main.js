import React, { useEffect, useState } from 'react';
import Controls from '../../Controls/Controls';
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

  return (
    <div>
      <Controls />
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
