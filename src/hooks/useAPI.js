const myAPI = "http://localhost:3001/inputs"

export const getType = async () => {
  const types = await fetch('https://pokeapi.co/api/v2/type/')
    .then((res) => res.json())
  return types;
}

export const sendForm = async(formAnswer) => {
  const {data} = await fetch(myAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formAnswer)
  })
  
  return data;
}
