import {ROUTES} from "../../../shared/registry/ROUTES"
import {QUERY_PARAMS} from "../../../shared/registry/QUERY_PARAMS";

const getDocumentsOfCollection = async (collectionName: string): Promise<Array<any>> => {
    const response = await fetch(`${ROUTES.DOCUMENT}?${QUERY_PARAMS.MODEL_NAME}=${collectionName}`)

    return await response.json()
}

const getDocumentInCollectionById = async (collectionName: string, documentId: string): Promise<any> => {
    const response = await fetch(
        `${ROUTES.DOCUMENT}?${QUERY_PARAMS.MODEL_NAME}=${collectionName}&${QUERY_PARAMS.DOCUMENT_ID}=${documentId}`)

    return await response.json()
}

export {getDocumentsOfCollection, getDocumentInCollectionById}
