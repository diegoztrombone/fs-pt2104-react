import { useState, useEffect } from 'react'
import Reloj from '../components/reloj'
import getDate from '../utils/getTime'


export default () => {
  let clockId = null
  

  const [clock, setClock] = useState({
    hours: getDate().getHours().toLocaleString(),
    minutes: getDate().getMinutes().toLocaleString(),
    seconds: getDate().getSeconds().toLocaleString(),
    miliseconds: getDate().getMilliseconds().toLocaleString(),
  })

  useEffect(() => {
    setInterval(() => {
      setClock({
        hours: getDate().getHours().toLocaleString(),
        minutes: getDate().getMinutes().toLocaleString(),
        seconds: getDate().getSeconds().toLocaleString(),
        miliseconds: getDate().getMilliseconds().toLocaleString(),
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