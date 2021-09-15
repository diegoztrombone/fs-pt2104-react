import axios from "axios";

export const getAPI = async () => {
  const response = await axios.get("https://restcountries.eu/rest/v2/all");
  return response;
};

export const getCountry = async (country) => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`);
    return response.data;
  } catch (error) {
    return false
  }
  
};

