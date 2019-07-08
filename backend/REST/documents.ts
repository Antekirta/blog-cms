import express from 'express'
import * as mongoose from 'mongoose'

const getDocumentsOfCollection = async (req: express.Request, res: express.Response) => {
    const collectionName = req.params.collectionName

    console.log('collectionName: ', collectionName)

    try {
        const documents = await mongoose.model(collectionName).find()

        res.status(200).send(documents)
    } catch (err) {
        res.status(500).send(err);
    }
}

export {getDocumentsOfCollection}
