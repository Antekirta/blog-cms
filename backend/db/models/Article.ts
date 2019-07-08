import {Typegoose, prop, ModelType, InstanceType} from "typegoose"
import {MODELS} from "../registry/MODELS"
import * as mongoose from 'mongoose'

interface IArticle {
    _id?: mongoose.Schema.Types.ObjectId // it's automatically added by Mongo
    title: string,
    description: string
    content: string
}

class Article extends Typegoose implements IArticle {
    @prop()
    title: string

    @prop()
    description: string

    @prop()
    content: string
}

const ArticleModel = new Article().getModelForClass(Article, {
    schemaOptions: {
        collection: MODELS.ARTICLES
    }
})

// Is ModelType<any> correct?
mongoose.model('articles', new Article() as ModelType<any>)

export {IArticle, ArticleModel}
