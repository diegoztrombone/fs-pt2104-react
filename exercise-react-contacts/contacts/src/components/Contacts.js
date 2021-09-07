import React from 'react'

export default function Contacts({ db, search, filter }) {
    return (
        <div>
            {db.map((contact, i) => {
                if (contact.[filter].includes(search)) {
                    return <h5 key={i}>{contact.name}</h5>
                }
                return null
            })}
        </div>
    )
}

// {db.filter(contact => <h4>{contact.includes(search)}</h4>)}

