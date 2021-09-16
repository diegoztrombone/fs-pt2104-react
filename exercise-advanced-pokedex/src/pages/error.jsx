import { useParams } from "react-router-dom";

export default () => {
  const { pokemon } = useParams();
  return (
    <div>
      <p>No se ha encontrado el pokemon {pokemon}</p>
    </div>
  );
};
