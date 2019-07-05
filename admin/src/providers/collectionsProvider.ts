import {ROUTES} from "../../../shared/registry/ROUTES"

const getCollectionsNames = async (): Promise<Array<string>> => {
    const response = await fetch(ROUTES.COLLECTION)

    return await response.json()
}

export {getCollectionsNames}
