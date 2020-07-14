import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

//import pages
import Home from './pages/home/home'
import Gallery from './pages/Gallery/Gallery'
import Projects from './pages/Projects/Projects'

export default function src(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/gallery" exact component={Gallery}/>
        <Route path="/Projects" exact component={Projects} />
      </Switch>
    </BrowserRouter>
  )
}