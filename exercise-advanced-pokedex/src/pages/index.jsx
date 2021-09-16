import { useState, useEffect } from "react";
import pokemonService from "../services/api/index";

import Input from "../components/Input";
import List from "../components/List";

export default () => {
  const [pokedex, setPokedex] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = ({ target }) => setSearch(target.value);

  useEffect(() => {
    const fetchedAPI = async () => {
      const response = await pokemonService.getAll();

      for await (let pokemon of response.data.results) {
        const item = await pokemonService.getOne(pokemon.url);
        setPokedex((prevState) => [...prevState, item.data]);
      }
    };

    fetchedAPI();
  }, []);

  const filter = (list) => {
    return list.filter(({ name }) => {
      const result =
        !search || name.toLowerCase().includes(search.toLowerCase());
      return result;
    });
  };

  return (
    <section>
      <Input value={search} onChange={handleSearch} />
      <List data={filter(pokedex)} />
    </section>
  );
};
