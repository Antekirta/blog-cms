import express from 'express'
import * as mongoose from 'mongoose'
import {modelsManager} from "../db/utils/models-manager"
import {ICollection} from "../db/interfaces/mongoose"
import {QUERY_PARAMS} from "../../shared/registry/QUERY_PARAMS"

const getCollectionsNames = async (req: express.Request, res: express.Response) => {
    const collections = await mongoose.connection.db
        .listCollections()
        .toArray()

    const collectionsNames = collections.map((collection: ICollection) => collection.name)

    res.status(200).send(collectionsNames)
}

const getCollectionSchema = async (req: express.Request, res: express.Response) => {
    const modelName = req.query[QUERY_PARAMS.MODEL_NAME]

    const schema = modelsManager.getModelSchema(modelName)

    if (schema) {
        res.status(200).send(schema)
    } else {
        res.status(404).send(`There is no schema called ${modelName}`)
    }
}

export {getCollectionsNames, getCollectionSchema}
