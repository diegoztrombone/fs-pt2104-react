import context from "./context";
import { useCountries } from "../hooks/useCountries";

const Provider = (props) => {
  const [country] = useCountries();
  return (
    <context.Provider value={{ country }}>{props.children}</context.Provider>
  );
};

export default Provider;
