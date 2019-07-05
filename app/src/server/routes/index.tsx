import express from 'express'

import React from 'react'
import {StaticRouter} from 'react-router-dom'
import {renderToString} from "react-dom/server"
import App from '../../shared/components/App/App'

const indexRoute = (req: express.Request, res: express.Response) => {
    const context = {}

    res.render('index', {
        App: renderToString(
            <StaticRouter
                location={req.url}
                context={context}>
                <App/>
            </StaticRouter>
        ),
        ssr: true
    })
}

export {indexRoute}
