export const useType = async () => {
  const types = await fetch('https://pokeapi.co/api/v2/type/')
    .then((res) => res.json())
    .catch((e) => "error")
  return types;
}