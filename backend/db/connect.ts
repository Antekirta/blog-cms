import * as mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/blog-cms', {
    useNewUrlParser: true
})

require("./models/Article")
