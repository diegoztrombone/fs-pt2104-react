import { useContext } from "react";
import context from "../state/context";
import { useState, useEffect } from "react"

import Input from '../components/Input'
import Filter from '../components/Filter'

export default () => {
  const { country, dispatch } = useContext(context);
  const [search, setSearch] = useState("")

  const handleSearch = ({ target }) => setSearch(target.value)

  return (
    <section>
      <Input value={search} onChange={handleSearch} />
      <Filter country={country} search={search} />
    </section>
  )
  };
