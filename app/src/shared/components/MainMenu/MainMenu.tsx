import React from 'react'

if (!!process.env.BROWSER === true) {
    require('./MainMenu.sass')
}

class MainMenu extends React.Component {
    render() {
        const menuItems = [
            {label: 'Home', href: '/'},
            {label: 'Article', href: '/article'},
            {label: 'About', href: '/about'},
            {label: 'Contacts', href: '/contacts'}
        ]

        return (
            <nav className={'main-menu'}>
                <ul className="main-menu__list">
                    {menuItems.map(({label, href}) => {
                        return (
                            <li key={href}
                                className="main-menu__item">
                                <a href={href}
                                   className="main-menu__link">{label}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export {MainMenu}
