const path = require('path')
import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import App from '../components/App/App'

const app = express()

app.set('view engine', 'ejs')
// Due to https://spectrum.chat/zeit/general/ejs-template-engine-does-not-work-on-zeit~926d9ddd-0bfa-4ffd-85c5-93cf79618d38
app.engine('ejs', require('ejs').renderFile)
app.set('views', 'app/views')

app.use(express.static(path.resolve(process.cwd(), 'app/dist')))

app.get('/', (req, res) => {
    res.render('index', {
        App: renderToString(<App />)
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening")
})
