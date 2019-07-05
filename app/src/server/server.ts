const path = require('path')
import express from 'express'
import bodyParser from 'body-parser'
import {setupRoutes} from "../router";
import '../../../backend/db/connect'

const app = express()

app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').renderFile) // Due to https://spectrum.chat/zeit/general/ejs-template-engine-does-not-work-on-zeit~926d9ddd-0bfa-4ffd-85c5-93cf79618d38
app.set('views', 'app/views')

app.use(bodyParser.json())
app.use(express.static(path.resolve(process.cwd(), 'app/dist')))
app.use(express.static(path.resolve(process.cwd(), 'admin/dist')))

setupRoutes(app)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on port ${process.env.PORT || 3000}`)
})
