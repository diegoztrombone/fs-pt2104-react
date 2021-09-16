import { useHistory, useParams, Redirect } from "react-router-dom";
import pokemonService from "../services/api/index";

import Button from "../components/Button";

import { useEffect, useState } from "react";

export default () => {
  const history = useHistory();
  const { pokemon } = useParams();
  const [fetchedPokemon, setFetchedPokemon] = useState("");

  const goBack = () => {
    history.push("/");
  };

  useEffect(() => {
    const myFetchAPI = async () => {
      const response = await pokemonService.getOne(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      if (response === false) {
        return setFetchedPokemon(false);
      }
      return setFetchedPokemon({ ...response.data });
    };
    myFetchAPI();
  }, []);

  if (fetchedPokemon === false) {
    return <Redirect to={`/error/${pokemon}`} />;
  }

  return (
    <div>
      <h3>{fetchedPokemon.name}</h3>
      <img
        src={fetchedPokemon.sprites?.front_default}
        alt={fetchedPokemon.name}
      />
      <Button onClick={goBack} name="GO BACK" />
    </div>
  );
};
