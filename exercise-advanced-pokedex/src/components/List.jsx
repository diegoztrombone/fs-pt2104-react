import { Link } from "react-router-dom";

export default ({ data }) => {
  return data.map((element, i, a) => {
    return (
      <section className="cardContainer"key={i}>
        <Link to={`/detail/${element.name}`}>{element.name}</Link>
      </section>
    );
  });
};
