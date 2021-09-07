import { useState, useEffect } from 'react'
import Cronometro from '../components/cronometro'

export default () => {
    let interval = null

    const [crono, setCrono] = useState(0)
    const [flag, setFlag] = useState(false)
    const [initDate, setInitDate] = useState(Date.now())

    const onClick = (bool) => () => {
        setInitDate(Date.now())
        setFlag(bool)
    }

    useEffect(() => {
        if (!initDate) {
            setCrono(0)
        }
        if (flag) {
            interval = setInterval(() => {
                setCrono((Date.now() - initDate))

            }, 1)
        }

        if (!flag) {
            clearInterval(interval)
            setCrono(0)
        }


        console.log(crono)

        return () => {
            clearInterval(interval)
        }

    }, [flag])



    return (
        <section>
            <Cronometro crono={crono} />
            <section>
                <button onClick={onClick(true)}>Start</button>
                <button onClick={onClick(false)}>Stop</button>
            </section>
        </section>
    )
}