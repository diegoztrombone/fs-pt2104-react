import timeConverter from "../../utils/timeConverter"

export default ({crono}) => {
    return (
        <section>
            <span>{timeConverter(crono, "0", -2, 3600000, 24)}:</span>
            <span>{timeConverter(crono, "0", -2, 60000, 60)}:</span>
            <span>{timeConverter(crono, "0", -2, 1000, 60)}:</span>
            <span>{timeConverter(crono, "00", -3)}</span>
        </section>

    )
}