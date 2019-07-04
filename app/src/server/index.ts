const path = require('path')
import express from 'express'
import {indexRoute} from "./routes"

const app = express()

app.set('view engine', 'ejs')
// Due to https://spectrum.chat/zeit/general/ejs-template-engine-does-not-work-on-zeit~926d9ddd-0bfa-4ffd-85c5-93cf79618d38
app.engine('ejs', require('ejs').renderFile)
app.set('views', 'app/views')

app.use(express.static(path.resolve(process.cwd(), 'app/dist')))

app.get('/', indexRoute)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server is listening on port " + port)
})
