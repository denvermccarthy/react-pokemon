export async function fetchPokemon() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=10');
  const data = await response.json();
  return data.results;
}

export async function fetchPokemonTypes() {
  const response = await fetch(
    'https://pokedex-alchemy.herokuapp.com/api/pokedex/types?perPage=10'
  );
  const data = await response.json();
  return data;
}

export async function fetchPokemonByType(type) {
  const params = new URLSearchParams();
  params.set('type', type);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}&perPage=10`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchPokemonByQuery(query) {
  const params = new URLSearchParams();
  params.set('pokemon', query);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}&perPage=10`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchPokemonByPage(page) {
  const params = new URLSearchParams();
  params.set('page', page);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}&perPage=10`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchPokemonTest(type, sort, page, query) {
  const params = new URLSearchParams();
  params.set('direction', sort);
  params.append('page', page);

  if (type !== 'All') {
    params.append('type', type);
  }
  if (query !== '') {
    params.append('pokemon', query);
  }

  const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&${params.toString()}&perPage=10`;
  console.log(url);

  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&${params.toString()}&perPage=10`
  );

  const data = await response.json();
  console.log(data);
  return data;
}
