import React from 'react'
import {BrowserRouter, Route, Link} from "react-router-dom"
import {AdminHome} from "../../pages/AdminHome/AdminHome"
import {AdminNavigation} from "../AdminNavigation/AdminNavigation"
import {RecordsList} from "../../pages/RecordsList/RecordsList"
import {EditingScreen} from "../../pages/EditingScreen/EditingScreen"


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className={'app'}>
                    <AdminNavigation/>
                </div>

                <Route exact
                       path={'/admin-panel'}
                       component={AdminHome}></Route>

                <Route path={'/admin-panel/records-list'}
                       render={() => <RecordsList collectionName={'articles'}></RecordsList>}></Route>

                <Route path={'/admin-panel/edit'}
                       render={() => <EditingScreen collectionName={'articles'}
                                                    documentId={'5d2244f8a8ce462cec733847'}></EditingScreen>}></Route>
            </BrowserRouter>
        )
    }
}

export {App}
