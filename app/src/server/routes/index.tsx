const path = require('path')
import express from 'express'

import {ArticleModel} from "../../../../backend/db/models/Article";

import React from 'react'
import {renderToString} from "react-dom/server"
import {baseMarkup} from "../../shared/baseMarkup"

const indexRoute = async (req: express.Request, res: express.Response) => {
    const articles = await ArticleModel.find()

    res.render('index', {
        App: renderToString(baseMarkup),
        ssr: true,
        articles
    })
}

const adminRoute = async (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(process.cwd(), 'admin/dist/index.html'))
}

export {indexRoute, adminRoute}
