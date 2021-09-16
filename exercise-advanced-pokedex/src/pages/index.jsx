import { useState, useEffect, useCallback } from "react";
import pokemonService from "../services/api/index";
import debounce from 'lodash.debounce'

import Input from "../components/Input";
import List from "../components/List";

export default () => {
  const [pokedex, setPokedex] = useState([]);
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([])
  const [debounceSearch, setDebounceSearch] = useState("")

  const debouncedSave = useCallback(debounce(value => setDebounceSearch(value), 1000), [],);

  const handleSearch = ({ target }) => {
    setSearch(target.value);
    debouncedSave(target.value)
    console.log(target)
    if(!target.value) setDebounceSearch("")
  }

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


  useEffect(() => {
    if (filter(pokedex).length === 0 && debounceSearch) {
      console.log("Entra")
      const myFetchAPI = async () => {

        const result = await pokemonService.getOne(`https://pokeapi.co/api/v2/pokemon/${debounceSearch}`)
        console.log("Consulta", result)
        if (result) {
          setPokemon([result.data])
        }

      }
      myFetchAPI()

    }
  }, [debounceSearch])

  console.log(">>>> DEBOUNCE", debounceSearch)
  console.log(">>>>> POKEMON NUEVO", pokemon)

  return (
    <section className="container">
      <Input value={search} onChange={handleSearch} />
      <List data={filter(pokedex)} />
      <List data={pokemon} />

    </section>
  );
};
