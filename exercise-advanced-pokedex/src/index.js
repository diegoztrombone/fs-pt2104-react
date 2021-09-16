import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Redirect, 
  Route
} from 'react-router-dom'


import Header from './components/Header'
import Footer from './components/Footer'
import './style/index.css'

import routes from './routes'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        {routes.map((route, i) => {
          return <Route {...route} key={i}></Route>
        })}
        <Redirect to='/' />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
