import React from 'react'
import { Route, Switch } from 'react-router-dom'

// component imports
import Story from './Story'

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Story} />
      </Switch>
    </React.Fragment>
  )
}

export default App
