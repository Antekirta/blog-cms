import * as mongoose from "mongoose";

interface ICollection {
    name: string
    type: 'collection'
    options: any
    info: {
        readonly: boolean
        uuid: any
    }
    idIndex: any
}

interface ISchema extends mongoose.Schema {
    paths: {
        [key: string]: any
    }
}

export {ICollection, ISchema}
