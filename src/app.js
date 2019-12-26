import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import axios from 'axios'
// import Auth from './lib/auth'

import 'bulma'
import './styles/style.scss'


import Home from './components/Home'


// git project https://github.com/erikflowers/weather-icons


const App = () => (
  <BrowserRouter>
    <Switch>

      <Route exact path="/home" component={Home} />

    </Switch>
  </BrowserRouter>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)