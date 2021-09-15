import List from "./List";

export default ({ pokedex, search }) => {
  return pokedex.map((filterPokemon, i) => {
    if (filterPokemon.name.toLowerCase().includes(search.toLowerCase())) {
      return <List data={filterPokemon} key={i} />;
    }
    return <List data={pokedex} key={i} />;
  });
};
