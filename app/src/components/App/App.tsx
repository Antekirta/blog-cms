import React from 'react'
import SiteHeader from '../SiteHeader/SiteHeader'

if (!!process.env.BROWSER === true) {
    require('bootstrap/dist/css/bootstrap.css')
}

export default class App extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <SiteHeader />
            </div>
        )
    }
}
