import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import LandingPage from './LandingPage.js'
import MainPage from './MainPage.js'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App