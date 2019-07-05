import React from 'react'

if (!!process.env.BROWSER === true) {
    require('./SiteFooter.sass')
}

class SiteFooter extends React.Component {
    render() {
        return (
            <footer className={'site-footer'}>Site footer</footer>
        )
    }
}

export {SiteFooter}
