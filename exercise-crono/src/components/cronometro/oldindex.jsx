export default ({crono}) => {
   
  return (
      <section>
          <span>{crono.hours}</span>
          <span>{crono.minutes}</span>
          <span>{crono.seconds}</span>
          <span>{crono.miliseconds}</span>
      </section>

  )
}