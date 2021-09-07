import React from 'react'

export default function List(props) {
    return (
        <div>
            {props.tasks.map(task => (
                <div key={task.id}>
                    <label>{task.description}</label>
                    <input type="checkbox"></input>
                    <button name={task.id} onClick={props.fnclick}>X</button>
                </div>
            ))}
        </div>
    )
}
