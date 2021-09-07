import React from 'react'

export default function InputHolder({fn}) {
    return (
        <div>
            <input onChange={fn} ></input>
        </div>
    )
}
