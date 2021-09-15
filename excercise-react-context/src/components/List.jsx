import { Link } from "react-router-dom";

export default ({ data, id }) => {
  console.log(data.name)
  return (
    <section>
      <Link
        key={id}
        to={`/country/${data.name}`}
        
      >
        {data.name}
      </Link>
    </section>
  );
};