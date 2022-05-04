import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'

function AppRouter() {
  return (
    <div>
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/posts">
                <Posts/>
            </Route>
            <Route path="/error">
                <Error/>
            </Route>
            <Redirect to="/error"/>
        </Switch>
    </div>
  )
}

export default AppRouter