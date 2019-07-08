import {ROUTES} from "../../../shared/registry/ROUTES"

const getDocumentsOfCollection = async (collectionName: string): Promise<Array<any>> => {
    const response = await fetch(`${ROUTES.DOCUMENT}/${collectionName}`)

    return await response.json()
}

export {getDocumentsOfCollection}
