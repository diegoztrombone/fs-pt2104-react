import { Link } from "react-router-dom";

export default ({ data }) => {
  return (
    <section>
      <Link
        to={{
          pathname: `/detail/${data.name}`,
          state: { ...data }
        }}
        pokemon={"HOLA"}
      >
        {data.name}
      </Link>
    </section>
  );
};
