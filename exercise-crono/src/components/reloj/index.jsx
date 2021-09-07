export default ({data}) => {
    return (
      <div>
        <span>{data.hours}</span>
        <span> : </span>
        <span>{data.minutes}</span>
        <span> : </span>
        <span>{data.seconds}</span>
      </div>
    )
  }