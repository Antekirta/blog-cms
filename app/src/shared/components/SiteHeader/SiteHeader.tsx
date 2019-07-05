import React from 'react'

if (!!process.env.BROWSER === true) {
    require('./SiteHeader.sass')
}

class SiteHeader extends React.Component {
    render() {
        return (
            <header className={'site-header'}>
                <h2>Site header!</h2>
            </header>
        )
    }
}

export {SiteHeader}
