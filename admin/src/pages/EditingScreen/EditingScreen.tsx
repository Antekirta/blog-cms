import React from 'react'

import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import {getDocumentInCollectionById} from "../../providers/documentsProvider"
import {getCollectionSchema} from "../../providers/collectionsProvider"
import {SCHEMA_TYPES, CUSTOM_SCHEMA_TYPES} from "../../../../shared/registry/SCHEMA_TYPES"

import {matchFieldConstructor} from "../../fields/helpers/match-constructor";
import {ISchema} from "../../../../backend/db/interfaces/mongoose";
import {ROUTES} from "../../../../shared/registry/ROUTES";

require('./EditingScreen.sass')

// @ts-ignore
console.log('SCHEMA_TYPES: ', SCHEMA_TYPES)

interface Props {
    collectionName: string
    documentId: string
}

interface LocalState {
    fields: Array<JSX.Element>
    documentData: {
        [key: string]: any
    }
}

class EditingScreen extends React.Component<Props, LocalState> {
    constructor(props: Props) {
        super(props)
    }

    state: LocalState = {
        fields: [],
        documentData: {}
    }

    async componentDidMount() {
        await this.getFields()
    }

    setFieldValue(fieldName: string, value: any) {
        const documentData = {
            ...this.state.documentData,
            [fieldName]: value
        }

        console.log('eeeeee')

        this.setState({documentData})
    }

    async submitHandler(event: React.FormEvent) {
        event.preventDefault()

        console.log('JSON.stringify(this.state.documentData): ', JSON.stringify(this.state.documentData))

        await fetch(ROUTES.ARTICLE, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(this.state.documentData)
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler.bind(this)}
                  className={'editing-screen'}>
                <Grid container
                      spacing={4}>
                    <Grid item
                          xs={12}>
                        <Typography variant="h4"
                                    component="h4">
                            Edit screen
                        </Typography>
                    </Grid>

                    {
                        this.state.fields.map((field) => {
                            return (
                                <Grid key={field.key}
                                      item
                                      xs={12}>
                                    {field}
                                </Grid>
                            )
                        })
                    }

                    <Grid item
                          xs={12}>
                        <Button variant="contained"
                                type="submit"
                                color="primary">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        )
    }

    async getFields() {
        const document = await getDocumentInCollectionById(this.props.collectionName, this.props.documentId)
        const schema = await getCollectionSchema(this.props.collectionName)

        const fields: Array<JSX.Element> = []

        Object.keys(schema.obj).map((fieldName: string) => {
            fields.push(matchFieldConstructor(schema as ISchema, fieldName, this))
        })

        this.setState({
            fields
        })

        console.log('document: ', document)
        console.log('schema: ', schema)
    }
}

export {EditingScreen}
