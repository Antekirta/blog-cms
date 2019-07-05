import express from 'express'
import {createArticle, deleteArticle, getArticle, updateArticle} from "../../backend/REST/articles"
import {getCollectionsNames} from "../../backend/REST/collections"
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
}

export {setupRoutes}
