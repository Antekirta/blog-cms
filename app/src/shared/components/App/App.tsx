import React from 'react'
import {Route, Switch, NavLink} from "react-router-dom";
import SiteHeader from '../SiteHeader/SiteHeader'
import {HomePage} from "../../pages/HomePage/HomePage"
import {ArticlePage} from "../../pages/ArticlePage/ArticlePage"

if (!!process.env.BROWSER === true) {
    require('bootstrap/dist/css/bootstrap.css')
}

export default class App extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <SiteHeader>
                </SiteHeader>

                <NavLink to="/">Home</NavLink>
                <NavLink to="/article">Article</NavLink>

                <Switch>
                    <Route exact
                           path="/"
                           component={HomePage}></Route>
                    <Route path="/article"
                           component={ArticlePage}></Route>
                </Switch>
            </div>
        )
    }
}
