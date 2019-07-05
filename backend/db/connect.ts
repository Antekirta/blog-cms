import * as mongoose from 'mongoose'
import {ArticleModel} from "./models/Article"

mongoose.connect('mongodb://localhost:27017/blog-cms', {
    useNewUrlParser: true
})
