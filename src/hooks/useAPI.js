const myAPI = "http://localhost:3001"
const pokeAPI = "https://pokeapi.co/api/v2"

export const getTypes = async () => {
  const types = await fetch(`${pokeAPI}/type/`)
    .then((res) => res.json())
  return types;
}

export const sendForm = async(formAnswer) => {
  const {data} = await fetch(`${myAPI}/inputs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formAnswer)
  })
  
  return data;
}

export const getSpecies = async (offset) => {
  const species = await fetch(`${pokeAPI}/pokemon-species/?offset=${offset}&limit=20",`)
    .then((res) => res.json())
  return species;
}