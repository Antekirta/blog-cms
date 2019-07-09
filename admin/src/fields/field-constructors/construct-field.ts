import {EditingScreen} from "../../pages/EditingScreen/EditingScreen";
import * as mongoose from "mongoose";

class ConstructField {
    protected customType: string

    constructor(readonly fieldName: string,
                readonly label: string,
                readonly schema: mongoose.Schema,
                readonly component: EditingScreen) {
        this.customType = schema.obj[fieldName].customType
    }

    public returnField() {

    }
}

export {ConstructField}
