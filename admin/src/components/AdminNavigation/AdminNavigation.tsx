import React from 'react'
import {Link as RouterLink} from "react-router-dom"
import _capitalize from 'lodash/capitalize'
import {getCollectionsNames} from "../../providers/collectionsProvider"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import AppBar from "@material-ui/core/AppBar"
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
            <Box className={'admin-navigation'}>
                <Grid container spacing={4}>
                    <AppBar position="static">
                        <nav>
                            <ul className={'admin-navigation__list'}>
                                <li className="admin-navigation__item">
                                    <RouterLink className="admin-navigation__link"
                                                to={'/admin-panel'}>Home</RouterLink>
                                </li>

                                {this.state.collectionsNames.map((collectionName: string) => {
                                    return (
                                        <li key={collectionName}
                                            className="admin-navigation__item">
                                            <RouterLink className="admin-navigation__link"
                                                        to={'/admin-panel/records-list'}>{collectionName}</RouterLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </AppBar>
                </Grid>
            </Box>
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
