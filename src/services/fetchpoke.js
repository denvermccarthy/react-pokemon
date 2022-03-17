export async function fetchPokemonTypes() {
  const response = await fetch(
    'https://pokedex-alchemy.herokuapp.com/api/pokedex/types?perPage=10'
  );
  const data = await response.json();
  return data;
}

export async function fetchPokemon(type, sort, page, query) {
  const params = new URLSearchParams();
  params.set('direction', sort);
  params.append('page', page);

  if (type !== 'All') {
    params.append('type', type);
  }
  if (query !== '') {
    params.append('pokemon', query);
  }

  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&${params.toString()}&perPage=10`
  );

  const data = await response.json();
  return data;
}
