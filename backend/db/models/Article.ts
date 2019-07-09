import {MODELS} from "../registry/MODELS"
import * as mongoose from 'mongoose'
import {modelsManager} from "../utils/models-manager"
import {CUSTOM_SCHEMA_TYPES} from "../../../shared/registry/SCHEMA_TYPES"

interface IArticle {
    _id?: mongoose.Schema.Types.ObjectId // it's automatically added by Mongo
    title: string
    description: string
    content: string
    showOnMainPage: boolean
}

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        label: 'Заголовок'
    },
    description: {
        type: String,
        customType: CUSTOM_SCHEMA_TYPES.HTML,
        // required: true,
        label: 'Описание'
    },
    content: {
        type: String,
        // required: true,
        label: 'Текст'
    },
    showOnMainPage: {
        type: Boolean,
        label: 'Показывать на главной странице'
    }
})

articleSchema.statics.modelNameRus = function () {
    return 'Статьи'
}

const ArticleModel = mongoose.model(MODELS.ARTICLES, articleSchema)

// You must register all the models!
modelsManager.register(MODELS.ARTICLES, articleSchema)

export {IArticle, ArticleModel}
