import { useState, useEffect, useCallback } from "react";
import pokemonService from "../services/api/index";
import debounce from 'lodash.debounce'

import Input from "../components/Input";
import List from "../components/List";

export default () => {
  const [pokedex, setPokedex] = useState([]);
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([])
  const [dbValue, saveToDb] = useState("")

  const debouncedSave = useCallback(
		debounce(nextValue => saveToDb(nextValue), 1000),
		[],
	);

  const handleSearch = ({ target }) => {
    const {value: nextValue} = target
    setSearch(nextValue);
    debouncedSave(nextValue)
    if (!target) {
      setPokemon([])
    }
  
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
    if (filter(pokedex).length === 0 && dbValue) {
      console.log("entra")
      const myFetchAPI = async () => {
        
        const result = await pokemonService.getOne(`https://pokeapi.co/api/v2/pokemon/${dbValue}`)
        console.log(result)
        if (result) {
          setPokemon([result.data])
        }
        
      }
      myFetchAPI()

    }
  }, [dbValue])

console.log(">>>>", dbValue)

  return (
    <section className="container">
      <Input value={search} onChange={handleSearch} />
      <List data={filter(pokedex)} />
      <List data={pokemon} />
      
    </section>
  );
};
