import React, { useEffect, useState } from 'react';
import Controls from '../../Controls/Controls';
import { fetchPokemon, fetchPokemonByType, fetchPokemonTypes } from '../../services/fetchpoke';

export default function Main() {
  const [data, setData] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const pokeData = await fetchPokemon();
      setData(pokeData);
      const typeData = await fetchPokemonTypes();
      setTypes(typeData);
    };
    fetch();
  }, []);

  //   useEffect(() => {
  //       const fetch = async () => {
  //           const fetchedByType = await fetchPokemonByType()
  //       }
  //   })

  return (
    <div>
      <Controls {...{ types }} />
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
