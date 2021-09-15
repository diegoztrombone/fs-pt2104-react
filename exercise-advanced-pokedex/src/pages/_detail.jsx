import { useLocation, useHistory, Redirect } from "react-router-dom";
export default () => {
  const { state } = useLocation();
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  if (!state) {
    console.log("entra");
    return <Redirect to="/" />;
  }

  return (
    <div>
      <p>{state.name}</p>
      <img src={`${state.sprites.front_default}`} alt="una foto" />
      <button onClick={goBack}>GO BACK</button>
    </div>
  );
};
