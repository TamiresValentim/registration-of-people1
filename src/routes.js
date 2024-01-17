import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./containers/Home"
import Users from "./containers/users"

function Routes() {
    return (
        <Router>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cadastro" component={Users} />
            </Switch>
        </Router>
    )
}

export default Routes