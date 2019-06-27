import React from 'react'

if (!!process.env.BROWSER === true) {
    require('bootstrap/dist/css/bootstrap.css')
}

export default class App extends React.Component {
    render () {
        return (
            <div className={'container'}>
                <div className="row">
                    <div className="col-2">AAAA</div>
                    <div className="col-4">col!</div>
                    <div className="col-2">col 2!</div>
                </div>
            </div>
        )
    }
}
