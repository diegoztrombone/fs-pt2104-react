import { useEffect, useState } from "react";
import { getAPI } from "../services/getAPI";

export const useCountries = () => {
  const [country, dispatch] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await getAPI();
      dispatch(response.data);
    })();
  }, []);

  return [country, dispatch];
};
