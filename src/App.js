import React from 'react'
import Todo from './Todo'
import {Switch,Route} from 'react-router-dom'
import Age from './Agecal/Age'
import Navbar from './Navbar'


const App = () => {
  return (
    <>
    <Navbar/>
    
      <Switch>
        <Route exact path="/" component={Todo}>
        </Route>
        <Route exact path="/Age" component={Age}>
        </Route>
      </Switch>
      
    </>
  )
}

export default App
