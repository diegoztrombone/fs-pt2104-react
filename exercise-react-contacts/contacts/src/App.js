import './App.css';
import { contacts } from './contacts.json'
import Contacts from './components/Contacts'
import InputHolder from './components/InputHolder'
import { useState } from 'react'

function App() {

  const [search, setSearch] = useState("")

  const onChangeFn = e => {
    setSearch(e.target.value)
  }
  
  return (
    <div className="App">
      <InputHolder fn={onChangeFn} />
      <Contacts db={contacts} search={search} filter={"name"} />
    </div>
  );
}

export default App;
