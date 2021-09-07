import { useState } from "react"
import InputHolder from "./components/InputHolder"
import List from './components/List'

function App() {
  const [task, setTask] = useState([])

  const onEnter = (e) => {
    if (e.key === "Enter") {
      setTask([...task, {

        description: e.target.value,
        id: task.length + 1

      }])
      e.target.value = ""
    }
  }
  // const deleteArr = (arr, item) => {
  //   return arr.filter(element => element !== item)
  // }
  const onClick = (e) => {
    console.log(e)
    
  }
  return (
    <div className="App">
     <InputHolder fn={onEnter}/> 
     <List tasks={task} fnclick={onClick}/>
    </div>
  );
}

export default App;
