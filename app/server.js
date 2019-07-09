module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../backend/REST/articles.ts":
/*!***********************************!*\
  !*** ../backend/REST/articles.ts ***!
  \***********************************/
/*! exports provided: getArticle, createArticle, updateArticle, deleteArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticle", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArticle", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateArticle", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticle", function() { return deleteArticle; });
/* harmony import */ var _db_models_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/models/Article */ "../backend/db/models/Article.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const getArticle = (req, res) => __awaiter(undefined, void 0, void 0, function* () {
    const { _id } = req.params;
    if (!_id) {
        const articles = yield _db_models_Article__WEBPACK_IMPORTED_MODULE_0__["ArticleModel"].find();
        res.status(200).send(articles);
        return;
    }
    const article = yield _db_models_Article__WEBPACK_IMPORTED_MODULE_0__["ArticleModel"].findById(_id);
    res.status(200).send(article);
});
const createArticle = (req, res) => __awaiter(undefined, void 0, void 0, function* () {
    const { body } = req;
    console.log('body: ', body);
    const article = {
        title: body.title,
        description: body.description,
        content: body.content,
        showOnMainPage: body.showOnMainPage
    };
    yield new _db_models_Article__WEBPACK_IMPORTED_MODULE_0__["ArticleModel"](article).save();
    res.status(201).send(`New article ${article.title} has been created!`);
});
const updateArticle = (req, res) => __awaiter(undefined, void 0, void 0, function* () {
    const { body } = req;
    if (!body._id) {
        res.status(500).send('Resource _id is not specified!');
    }
    yield _db_models_Article__WEBPACK_IMPORTED_MODULE_0__["ArticleModel"].findOneAndUpdate({ _id: body._id }, body, {
        upsert: false
    });
    res.status(200).send(`Article ${body.title} has been updated!`);
});
const deleteArticle = (req, res) => __awaiter(undefined, void 0, void 0, function* () {
    const { body } = req;
    if (!body._id) {
        res.status(500).send('Resource _id is not specified!');
    }
    yield _db_models_Article__WEBPACK_IMPORTED_MODULE_0__["ArticleModel"].findByIdAndDelete(body._id);
    res.status(200).send(`Article ${body.title} has been deleted!`);
});



/***/ }),

/***/ "../backend/REST/collections.ts":
/*!**************************************!*\
  !*** ../backend/REST/collections.ts ***!
  \**************************************/
/*! exports provided: getCollectionsNames, getCollectionSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollectionsNames", function() { return getCollectionsNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollectionSchema", function() { return getCollectionSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_utils_models_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/utils/models-manager */ "../backend/db/utils/models-manager.ts");
/* harmony import */ var _shared_registry_QUERY_PARAMS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/registry/QUERY_PARAMS */ "../shared/registry/QUERY_PARAMS.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const getCollectionsNames = (req, res) => __awaiter(undefined, void 0, void 0, function* () {
    const collections = yield mongoose__WEBPACK_IMPORTED_MODULE_0__["connection"].db
        .listCollections()
        .toArray();
    const collectionsNames = collections.map((collection) => collection.name);
    res.status(200).send(collectionsNames);
});
const getCollectionSchema = (req, res) => __awaiter(undefined, void 0, void 0, function* () {
    const modelName = req.query[_shared_registry_QUERY_PARAMS__WEBPACK_IMPORTED_MODULE_2__["QUERY_PARAMS"].MODEL_NAME];
    const schema = _db_utils_models_manager__WEBPACK_IMPORTED_MODULE_1__["modelsManager"].getModelSchema(modelName);
    if (schema) {
        res.status(200).send(schema);
    }
    else {
        res.status(404).send(`There is no schema called ${modelName}`);
    }
});



/***/ }),

/***/ "../backend/REST/documents.ts":
/*!************************************!*\
  !*** ../backend/REST/documents.ts ***!
  \************************************/
/*! exports provided: getDocumentsOfCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentsOfCollection", function() { return getDocumentsOfCollection; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_registry_QUERY_PARAMS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/registry/QUERY_PARAMS */ "../shared/registry/QUERY_PARAMS.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const getDocumentsOfCollection = (req, res) => __awaiter(undefined, void 0, void 0, function* () {
    const [modelName, documentId] = [req.query[_shared_registry_QUERY_PARAMS__WEBPACK_IMPORTED_MODULE_1__["QUERY_PARAMS"].MODEL_NAME], req.query[_shared_registry_QUERY_PARAMS__WEBPACK_IMPORTED_MODULE_1__["QUERY_PARAMS"].DOCUMENT_ID]];
    try {
        const documents = documentId ?
            yield mongoose__WEBPACK_IMPORTED_MODULE_0__["model"](modelName).findById(documentId) :
            yield mongoose__WEBPACK_IMPORTED_MODULE_0__["model"](modelName).find();
        res.status(200).send(documents);
    }
    catch (err) {
        res.status(500).send(err);
    }
});



/***/ }),

/***/ "../backend/db/connect.ts":
/*!********************************!*\
  !*** ../backend/db/connect.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

mongoose__WEBPACK_IMPORTED_MODULE_0__["connect"]('mongodb://localhost:27017/blog-cms', {
    useNewUrlParser: true,
    useCreateIndex: true
});
__webpack_require__(/*! ./models/Article */ "../backend/db/models/Article.ts");


/***/ }),

/***/ "../backend/db/models/Article.ts":
/*!***************************************!*\
  !*** ../backend/db/models/Article.ts ***!
  \***************************************/
/*! exports provided: ArticleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModel", function() { return ArticleModel; });
/* harmony import */ var _registry_MODELS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registry/MODELS */ "../backend/db/registry/MODELS.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_models_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/models-manager */ "../backend/db/utils/models-manager.ts");
/* harmony import */ var _shared_registry_SCHEMA_TYPES__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/registry/SCHEMA_TYPES */ "../shared/registry/SCHEMA_TYPES.ts");




const articleSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"]({
    title: {
        type: String,
        required: true,
        unique: true,
        label: 'Заголовок'
    },
    description: {
        type: String,
        customType: _shared_registry_SCHEMA_TYPES__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_SCHEMA_TYPES"].HTML,
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
});
articleSchema.statics.modelNameRus = function () {
    return 'Статьи';
};
const ArticleModel = mongoose__WEBPACK_IMPORTED_MODULE_1__["model"](_registry_MODELS__WEBPACK_IMPORTED_MODULE_0__["MODELS"].ARTICLES, articleSchema);
// You must register all the models!
_utils_models_manager__WEBPACK_IMPORTED_MODULE_2__["modelsManager"].register(_registry_MODELS__WEBPACK_IMPORTED_MODULE_0__["MODELS"].ARTICLES, articleSchema);



/***/ }),

/***/ "../backend/db/registry/MODELS.ts":
/*!****************************************!*\
  !*** ../backend/db/registry/MODELS.ts ***!
  \****************************************/
/*! exports provided: MODELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODELS", function() { return MODELS; });
const MODELS = {
    ARTICLES: 'articles'
};



/***/ }),

/***/ "../backend/db/utils/models-manager.ts":
/*!*********************************************!*\
  !*** ../backend/db/utils/models-manager.ts ***!
  \*********************************************/
/*! exports provided: modelsManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelsManager", function() { return modelsManager; });
/**
 * Models manager make all the models accessible by their names
 */
class ModelsManager {
    constructor() {
        this.schemas = new Map();
    }
    register(modelName, schema) {
        this.schemas.set(modelName, schema);
    }
    getModelSchema(modelName) {
        return this.schemas.get(modelName);
    }
}
const modelsManager = new ModelsManager();



/***/ }),

/***/ "../shared/registry/QUERY_PARAMS.ts":
/*!******************************************!*\
  !*** ../shared/registry/QUERY_PARAMS.ts ***!
  \******************************************/
/*! exports provided: QUERY_PARAMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_PARAMS", function() { return QUERY_PARAMS; });
const QUERY_PARAMS = {
    MODEL_NAME: 'modelName',
    DOCUMENT_ID: 'documentId'
};



/***/ }),

/***/ "../shared/registry/ROUTES.ts":
/*!************************************!*\
  !*** ../shared/registry/ROUTES.ts ***!
  \************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = {
    MAIN: '/',
    ADMIN_PANEL: '/admin-panel',
    COLLECTION: '/rest/collection',
    SCHEMA: '/rest/schema',
    DOCUMENT: '/rest/document',
    ARTICLE: '/rest/article'
};



/***/ }),

/***/ "../shared/registry/SCHEMA_TYPES.ts":
/*!******************************************!*\
  !*** ../shared/registry/SCHEMA_TYPES.ts ***!
  \******************************************/
/*! exports provided: SCHEMA_TYPES, CUSTOM_SCHEMA_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEMA_TYPES", function() { return SCHEMA_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_SCHEMA_TYPES", function() { return CUSTOM_SCHEMA_TYPES; });
const SCHEMA_TYPES = {
    STRING: 'String',
    NUMBER: 'Number',
    DATE: 'Date',
    BUFFER: 'Buffer',
    BOOLEAN: 'Boolean',
    MIXED: 'Mixed',
    OBJECT_ID: 'ObjectId',
    ARRAY: 'Array',
    DECIMAL_128: '128',
    MAP: 'Map'
};
const CUSTOM_SCHEMA_TYPES = {
    HTML: 'html',
    MULTI_SELECT: 'multi-select'
};



/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/*! exports provided: setupRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupRoutes", function() { return setupRoutes; });
/* harmony import */ var _backend_REST_articles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../backend/REST/articles */ "../backend/REST/articles.ts");
/* harmony import */ var _backend_REST_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../backend/REST/collections */ "../backend/REST/collections.ts");
/* harmony import */ var _backend_REST_documents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../backend/REST/documents */ "../backend/REST/documents.ts");
/* harmony import */ var _server_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server/routes */ "./src/server/routes/index.tsx");
/* harmony import */ var _shared_registry_ROUTES__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/registry/ROUTES */ "../shared/registry/ROUTES.ts");





const setupRoutes = (app) => {
    app.get(_shared_registry_ROUTES__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].MAIN, _server_routes__WEBPACK_IMPORTED_MODULE_3__["indexRoute"]);
    app.get(`${_shared_registry_ROUTES__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].ADMIN_PANEL}*`, _server_routes__WEBPACK_IMPORTED_MODULE_3__["adminRoute"]);
    app.get(`${_shared_registry_ROUTES__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].ARTICLE}/:_id`, _backend_REST_articles__WEBPACK_IMPORTED_MODULE_0__["getArticle"]);
    app.post(`${_shared_registry_ROUTES__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].ARTICLE}`, _backend_REST_articles__WEBPACK_IMPORTED_MODULE_0__["createArticle"]);
    app.patch(`${_shared_registry_ROUTES__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].ARTICLE}`, _backend_REST_articles__WEBPACK_IMPORTED_MODULE_0__["updateArticle"]);
    app.delete(`${_shared_registry_ROUTES__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].ARTICLE}`, _backend_REST_articles__WEBPACK_IMPORTED_MODULE_0__["deleteArticle"]);
    app.get(_shared_registry_ROUTES__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].COLLECTION, _backend_REST_collections__WEBPACK_IMPORTED_MODULE_1__["getCollectionsNames"]);
    app.get(_shared_registry_ROUTES__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].SCHEMA, _backend_REST_collections__WEBPACK_IMPORTED_MODULE_1__["getCollectionSchema"]);
    app.get(_shared_registry_ROUTES__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].DOCUMENT, _backend_REST_documents__WEBPACK_IMPORTED_MODULE_2__["getDocumentsOfCollection"]);
};



/***/ }),

/***/ "./src/server/routes/index.tsx":
/*!*************************************!*\
  !*** ./src/server/routes/index.tsx ***!
  \*************************************/
/*! exports provided: indexRoute, adminRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexRoute", function() { return indexRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminRoute", function() { return adminRoute; });
/* harmony import */ var _backend_db_models_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../backend/db/models/Article */ "../backend/db/models/Article.ts");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_baseMarkup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/baseMarkup */ "./src/shared/baseMarkup.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const path = __webpack_require__(/*! path */ "path");



const indexRoute = (req, res) => __awaiter(undefined, void 0, void 0, function* () {
    const articles = yield _backend_db_models_Article__WEBPACK_IMPORTED_MODULE_0__["ArticleModel"].find();
    res.render('index', {
        App: Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])(_shared_baseMarkup__WEBPACK_IMPORTED_MODULE_2__["baseMarkup"]),
        ssr: true,
        articles
    });
});
const adminRoute = (req, res) => __awaiter(undefined, void 0, void 0, function* () {
    res.sendFile(path.resolve(process.cwd(), 'admin/dist/index.html'));
});



/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router */ "./src/router.ts");
/* harmony import */ var _backend_db_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../backend/db/connect */ "../backend/db/connect.ts");
const path = __webpack_require__(/*! path */ "path");




const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.set('view engine', 'ejs');
app.engine('ejs', __webpack_require__(/*! ejs */ "ejs").renderFile); // Due to https://spectrum.chat/zeit/general/ejs-template-engine-does-not-work-on-zeit~926d9ddd-0bfa-4ffd-85c5-93cf79618d38
app.set('views', 'app/views');
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path.resolve(process.cwd(), 'app/dist')));
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path.resolve(process.cwd(), 'admin/dist')));
Object(_router__WEBPACK_IMPORTED_MODULE_2__["setupRoutes"])(app);
app.listen(Object({"BROWSER":true}).PORT || 3000, () => {
    console.log(`Server is listening on port ${Object({"BROWSER":true}).PORT || 3000}`);
});


/***/ }),

/***/ "./src/shared/baseMarkup.tsx":
/*!***********************************!*\
  !*** ./src/shared/baseMarkup.tsx ***!
  \***********************************/
/*! exports provided: baseMarkup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseMarkup", function() { return baseMarkup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SiteHeader_SiteHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SiteHeader/SiteHeader */ "./src/shared/components/SiteHeader/SiteHeader.tsx");
/* harmony import */ var _components_SiteFooter_SiteFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SiteFooter/SiteFooter */ "./src/shared/components/SiteFooter/SiteFooter.tsx");
/* harmony import */ var _components_SiteSidebar_SiteSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SiteSidebar/SiteSidebar */ "./src/shared/components/SiteSidebar/SiteSidebar.tsx");
/* harmony import */ var _components_MainMenu_MainMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MainMenu/MainMenu */ "./src/shared/components/MainMenu/MainMenu.tsx");
/* harmony import */ var _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/HomePage/HomePage */ "./src/shared/pages/HomePage/HomePage.tsx");






const baseMarkup = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SiteHeader_SiteHeader__WEBPACK_IMPORTED_MODULE_1__["SiteHeader"], null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainMenu_MainMenu__WEBPACK_IMPORTED_MODULE_4__["MainMenu"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row no-gutters" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_5__["HomePage"], null)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col-4" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SiteSidebar_SiteSidebar__WEBPACK_IMPORTED_MODULE_3__["SiteSidebar"], null)))),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SiteFooter_SiteFooter__WEBPACK_IMPORTED_MODULE_2__["SiteFooter"], null)));



/***/ }),

/***/ "./src/shared/components/MainMenu/MainMenu.sass":
/*!******************************************************!*\
  !*** ./src/shared/components/MainMenu/MainMenu.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/shared/components/MainMenu/MainMenu.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/MainMenu/MainMenu.tsx ***!
  \*****************************************************/
/*! exports provided: MainMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenu", function() { return MainMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

if (true) {
    __webpack_require__(/*! ./MainMenu.sass */ "./src/shared/components/MainMenu/MainMenu.sass");
}
class MainMenu extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        const menuItems = [
            { label: 'Home', href: '/' },
            { label: 'Article', href: '/article' },
            { label: 'About', href: '/about' },
            { label: 'Contacts', href: '/contacts' }
        ];
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", { className: 'main-menu' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "main-menu__list" }, menuItems.map(({ label, href }) => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { key: href, className: "main-menu__item" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: href, className: "main-menu__link" }, label)));
            }))));
    }
}



/***/ }),

/***/ "./src/shared/components/SiteFooter/SiteFooter.sass":
/*!**********************************************************!*\
  !*** ./src/shared/components/SiteFooter/SiteFooter.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/shared/components/SiteFooter/SiteFooter.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/components/SiteFooter/SiteFooter.tsx ***!
  \*********************************************************/
/*! exports provided: SiteFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteFooter", function() { return SiteFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

if (true) {
    __webpack_require__(/*! ./SiteFooter.sass */ "./src/shared/components/SiteFooter/SiteFooter.sass");
}
class SiteFooter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", { className: 'site-footer' }, "Site footer"));
    }
}



/***/ }),

/***/ "./src/shared/components/SiteHeader/SiteHeader.sass":
/*!**********************************************************!*\
  !*** ./src/shared/components/SiteHeader/SiteHeader.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/shared/components/SiteHeader/SiteHeader.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/components/SiteHeader/SiteHeader.tsx ***!
  \*********************************************************/
/*! exports provided: SiteHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteHeader", function() { return SiteHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

if (true) {
    __webpack_require__(/*! ./SiteHeader.sass */ "./src/shared/components/SiteHeader/SiteHeader.sass");
}
class SiteHeader extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", { className: 'site-header' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Site header!")));
    }
}



/***/ }),

/***/ "./src/shared/components/SiteSidebar/SiteSidebar.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/components/SiteSidebar/SiteSidebar.tsx ***!
  \***********************************************************/
/*! exports provided: SiteSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteSidebar", function() { return SiteSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class SiteSidebar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", { className: "site-sidebar" }, "Site sidebar"));
    }
}



/***/ }),

/***/ "./src/shared/pages/HomePage/HomePage.tsx":
/*!************************************************!*\
  !*** ./src/shared/pages/HomePage/HomePage.tsx ***!
  \************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class HomePage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Home page")));
    }
}



/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map