import axios from "axios";
import { catcher } from "../helpers";

// const query = '/pokemon?limit=30&offset=0'

const client = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Content-Type": "application/json"
  }
});

const getOne = ({ get }) => async (url) => {
  return await catcher(get)(url);
};

const getAll = ({ get }) => async () => {
  const result = await catcher(get)("/pokemon?limit=15&offset=0");
  return result;
};

export default {
  getAll: getAll(client),
  getOne: getOne(axios)
};
