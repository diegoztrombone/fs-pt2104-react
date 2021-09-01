import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from '../data.json'

import Greetings from './components/Greetings'

const users = ["Diego", "Manuel"]
const App = (
   <div>
     {users.map(user => <Greetings name={user} />)}
   </div>
)


const root = document.getElementById("app")
ReactDOM.render(App, root);
