import React from 'react'
import {Link} from "react-router-dom"
import _capitalize from 'lodash/capitalize'
import {getCollectionsNames} from "../../providers/collectionsProvider"
import './AdminNavigation.sass'

interface Props {

}

interface LocalState {
    collectionsNames: Array<string>
}

class AdminNavigation extends React.Component<Props, LocalState> {
    constructor(props: Props) {
        super(props)
        this.state = {
            collectionsNames: []
        }

        this.getCollections()
    }

    render() {
        return (
            <nav className={'admin-navigation'}>
                <ul className={'admin-navigation__list'}>
                    <li className="admin-navigation__item">
                        <Link className="admin-navigation__link"
                              to={'/admin-panel'}>Home</Link>
                    </li>

                    {this.state.collectionsNames.map((collectionName: string) => {
                        return (
                            <li key={collectionName}
                                className="admin-navigation__item">
                                <Link className="admin-navigation__link"
                                      to={'/admin-panel/records-list'}>{collectionName}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }

    async getCollections() {
        const collectionsNames = await getCollectionsNames()

        this.setState({
            collectionsNames: collectionsNames.map(name => _capitalize(name))
        })
    }
}

export {AdminNavigation}
