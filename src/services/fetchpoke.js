export async function fetchPokemon() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = await response.json();
  return data.results;
}

export async function fetchPokemonTypes() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await response.json();
  return data;
}

export async function fetchPokemonByType(type) {
  const params = new URLSearchParams();
  params.set('type', type);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await response.json();
  return data.results;
}
