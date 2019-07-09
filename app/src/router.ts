import express from 'express'
import {createArticle, deleteArticle, getArticle, updateArticle} from "../../backend/REST/articles"
import {getCollectionSchema, getCollectionsNames} from "../../backend/REST/collections"
import {getDocumentsOfCollection} from "../../backend/REST/documents";
import {indexRoute, adminRoute} from "./server/routes"
import {ROUTES} from "../../shared/registry/ROUTES"

const setupRoutes = (app: express.Application) => {
    app.get(ROUTES.MAIN, indexRoute)

    app.get(`${ROUTES.ADMIN_PANEL}*`, adminRoute)

    app.get(`${ROUTES.ARTICLE}/:_id`, getArticle)
    app.post(`${ROUTES.ARTICLE}`, createArticle)
    app.patch(`${ROUTES.ARTICLE}`, updateArticle)
    app.delete(`${ROUTES.ARTICLE}`, deleteArticle)

    app.get(ROUTES.COLLECTION, getCollectionsNames)
    app.get(ROUTES.SCHEMA, getCollectionSchema)
    app.get(ROUTES.DOCUMENT, getDocumentsOfCollection)
}

export {setupRoutes}
