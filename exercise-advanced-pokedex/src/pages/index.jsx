import { useState, useEffect } from 'react'
import pokemonService from '../services/api/index'

import Input from '../components/Input'


export default () => {
    const [pokedex, setPokedex] = useState([])
    const [search, setSearch] = useState('')




    const handleSearch = ({ target }) => setSearch(target.value)

    const searchFilter = (list) => {
        return list.map((e, i) => {
        if (e.name.toLowerCase().includes(search.toLowerCase())) {
            return (<h2 key={i}>{e.name}</h2>)
        }
        return <h2 key={i}>{list.name}</h2>
        })
    }

    useEffect(() => {
        const fetchedAPI = async () => {
            const response = await pokemonService.getAll()

            for await (let pokemon of response.data.results) {
                const item = await pokemonService.getOne(pokemon.url)
                setPokedex(prevState => [...prevState, item.data])
            }
            
        }
        fetchedAPI()
    }, [])


    
    return (
        <section>
            <Input 
            value={search}
            onChange={handleSearch} />
            <section>{searchFilter(pokedex)}</section>
        </section>

    )
}