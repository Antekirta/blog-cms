import React from 'react'
import {BrowserRouter, Route, Link} from "react-router-dom"
import {AdminHome} from "../../pages/AdminHome/AdminHome"
import {AdminNavigation} from "../AdminNavigation/AdminNavigation"
import {RecordsList} from "../../pages/RecordsList/RecordsList"

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div className={'app'}>
                    <h1>Blog CMS</h1>

                    <AdminNavigation />
                </div>

                <Route exact path={'/admin-panel'} component={AdminHome}></Route>
                <Route path={'/admin-panel/records-list'} component={RecordsList}></Route>
            </BrowserRouter>
        )
    }
}

export {App}
