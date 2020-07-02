import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

//import pages
import Home from './pages/home/home'
import Gallery from './pages/Gallery/Gallery'

export default function src(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/gallery" exact component={Gallery}/>
      </Switch>
    </BrowserRouter>
  )
}