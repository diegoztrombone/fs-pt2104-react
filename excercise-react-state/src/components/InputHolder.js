import React from 'react'

export default function Input(props) {
    return (
        <div>
            <input onKeyDown={props.fn} placeholder="Lista de Tareas"></input>
        </div>
    )
}
