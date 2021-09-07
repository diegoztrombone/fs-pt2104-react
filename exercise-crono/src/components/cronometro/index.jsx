export default ({crono, initDate}) => {
    return (
        <section>
            <span>{("0" + Math.floor(((Date.now() - initDate)/3600000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor(((Date.now() - initDate)/60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor(((Date.now() - initDate)/1000) % 60)).slice(-2)}:</span>
            <span>{("00" + crono).slice(-3)}</span>
        </section>

    )
}