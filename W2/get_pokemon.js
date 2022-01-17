const fetch = require('node-fetch')

async function getPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  if(response.status !== 200) throw `HTTP error: ${response.status}`
  const data = await response.json()
  return data;
}

module.exports = getPokemon;

