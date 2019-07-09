import React from 'react'
import {getDocumentsOfCollection} from "../../providers/documentsProvider"
import {IArticle} from "../../../../backend/db/models/Article"
import {Link} from "react-router-dom";

interface Props {
    collectionName: string
}

interface State {
    records: Array<IArticle>
}

class RecordsList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            records: []
        }

        this.getDocumentsOfCollection()
    }

    render() {
        return (
            <div className={'records-list'}>
                <h1>Records list</h1>

                <ul className={'records-list__list'}>
                    {this.state.records.map(record => {
                        return (
                            <li key={record._id.toString()}
                                className="records-list__item">
                                <Link
                                    to={'/admin-panel/edit'}>{record.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    async getDocumentsOfCollection() {
        const records = await getDocumentsOfCollection(this.props.collectionName)

        this.setState({
            records
        })
    }
}

export {RecordsList}
