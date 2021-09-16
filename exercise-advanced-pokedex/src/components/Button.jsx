export default (props) => {
  return (
    <div>
      <button {...props}>{props.name}</button>
    </div>
  );
};
