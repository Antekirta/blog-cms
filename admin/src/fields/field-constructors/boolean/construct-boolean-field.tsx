import React from 'react'
import * as mongoose from "mongoose";
import {ConstructField} from "../construct-field";
import {EditingScreen} from "../../../pages/EditingScreen/EditingScreen";
import {switchFieldType} from "./types/switch";

class ConstructBooleanField extends ConstructField {
    constructor(fieldName: string, label: string, schema: mongoose.Schema, component: EditingScreen) {
        super(fieldName, label, schema, component)
    }

    public returnField() {
        return switchFieldType.call(this)
    }
}

export {ConstructBooleanField}
