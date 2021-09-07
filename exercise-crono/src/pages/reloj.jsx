import { useState, useEffect } from 'react'
import Reloj from '../components/reloj'


export default () => {
  let clockId = null
  

  const [clock, setClock] = useState({
    hours: new Date().getHours().toLocaleString(),
    minutes: new Date().getMinutes().toLocaleString(),
    seconds: new Date().getSeconds().toLocaleString(),
    miliseconds: new Date().getMilliseconds().toLocaleString(),
  })

  useEffect(() => {
    setInterval(() => {
      setClock({
        hours: new Date().getHours().toLocaleString(),
        minutes: new Date().getMinutes().toLocaleString(),
        seconds: new Date().getSeconds().toLocaleString(),
        miliseconds: new Date().getMilliseconds().toLocaleString(),
      })
    }, 1000)

    return () => {
      clearInterval(clockId)
    }


  }, [clock])


  return (
    <section>
      <Reloj data={clock} />
    </section>
  )
}