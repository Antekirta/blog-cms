import express from 'express'
import * as mongoose from 'mongoose'
import {ICollection} from "../db/interfaces/mongoose"

const getCollectionsNames = async (req: express.Request, res: express.Response) => {
    const collections = await mongoose.connection.db
        .listCollections()
        .toArray()

    const collectionsNames = collections.map((collection: ICollection) => collection.name)

    res.status(200).send(collectionsNames)
}

export {getCollectionsNames}
