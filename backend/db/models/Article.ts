import {Typegoose, prop} from "typegoose"
import {MODELS} from "../registry/MODELS";

interface IArticle {
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

export {IArticle, ArticleModel}
