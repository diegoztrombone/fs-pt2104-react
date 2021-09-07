import { useState, useEffect } from 'react'
import Cronometro from '../components/cronometro'

export default () => {
    let interval = null
    
    const [crono, setCrono] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
        miliseconds: 0,
    })


    const [flag, setFlag] = useState(false)
    const [initDate, setInitDate] = useState(0)

    const onClick = (bool) => () => {
        console.log("entra")
        setInitDate(Date.now())
        console.log(">>>>", crono)
        setFlag(bool)
    }

    // const handleCrono = initDate => {
    //     setCrono({
    //         hours: ("0" + Math.floor(((Date.now() - initDate)/3600000) % 60)).slice(-2),
    //         minutes: ("0" + Math.floor(((Date.now() - initDate)/60000) % 60)).slice(-2),
    //         seconds: ("0" + Math.floor(((Date.now() - initDate)/1000) % 60)).slice(-2),
    //         miliseconds: ("00" + crono).slice(-3),
    //     })
    // }

    useEffect(() => {
        console.log(">>>USEEFECT")
        console.log(initDate)
        if (flag) {
            interval = setInterval(() => {
                setCrono({
                    hours: Math.floor(((Date.now() - initDate) / 3600000) % 60),
                    minutes: Math.floor(((Date.now() - initDate) / 60000) % 60),
                    seconds: Math.floor(((Date.now() - initDate) / 1000) % 60),
                    miliseconds: (crono),
                })

            }, 1)
        }

        if (!flag) {
            clearInterval(interval)
            setCrono({
                hours: 0,
                minutes: 0,
                seconds: 0,
                miliseconds: 0,
            })
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
                <button onClick={() => console.log(initDate, crono)}>Check</button>
            </section>
        </section>
    )
}