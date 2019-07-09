import React from 'react'
import {EditingScreen} from "../../../pages/EditingScreen/EditingScreen";
import * as mongoose from "mongoose";
import {ConstructField} from '../construct-field'
import {CUSTOM_SCHEMA_TYPES} from "../../../../../shared/registry/SCHEMA_TYPES";
import {stringTypeField} from "./types/string";
import {htmlTypeField} from "./types/html";

class ConstructStringField extends ConstructField {
    constructor(fieldName: string, label: string, schema: mongoose.Schema, component: EditingScreen) {
        super(fieldName, label, schema, component)
    }

    public returnField() {
        switch (this.customType) {
            case CUSTOM_SCHEMA_TYPES.HTML:
                return htmlTypeField.call(this)
            default:
                return stringTypeField.call(this)
        }
    }
}

export {ConstructStringField}
