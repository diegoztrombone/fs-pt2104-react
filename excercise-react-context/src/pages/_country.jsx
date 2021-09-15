import { useParams, Redirect } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import context from '../state/context'
import { useCountries } from "../hooks/useCountries";
import { getCountry } from '../services/getAPI'

export default () => {
  const { country: params } = useParams()
  const [search, setSearch] = useState([])

  useEffect(() => {
    (async () => {
      const response = await getCountry(params)
      if (response === false) {
        return setSearch(response)
      }
      return setSearch(...response)
    })()
  }, [])

  if (search===false) {
    return <Redirect to="/error" />
  }

  return (
  <section>
    <h1>{search.name}</h1>
    <img src={search.flag}></img>
  </section>);
};
