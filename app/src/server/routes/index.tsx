import React from 'react'
import express from 'express'
import {renderToString} from "react-dom/server"
import App from '../../components/App/App'

const indexRoute = (req: express.Request, res: express.Response) => {
    res.render('index', {
        App: renderToString(<App/>),
        ssr: true
    })
}

export {indexRoute}
