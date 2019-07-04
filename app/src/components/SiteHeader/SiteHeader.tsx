import React from 'react'

if (!!process.env.BROWSER === true) {
    require('./SiteHeader.sass')
}

export default class SiteHeader extends React.Component {
    render() {
        return (
            <header className={'site-header'}>Site header!</header>
        )
    }
}
