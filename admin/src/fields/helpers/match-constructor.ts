import {EditingScreen} from "../../pages/EditingScreen/EditingScreen";
import {ConstructStringField} from "../field-constructors/string/construct-string-field";
import {ConstructArrayField} from "../field-constructors/array/construct-array-field";
import {ConstructBooleanField} from "../field-constructors/boolean/construct-boolean-field";
import {SCHEMA_TYPES} from "../../../../shared/registry/SCHEMA_TYPES";
import {ISchema} from "../../../../backend/db/interfaces/mongoose";

export const matchFieldConstructor = (schema: ISchema, fieldName: string, component: EditingScreen): JSX.Element => {
    const {instance, options} = schema.paths[fieldName]

    const {label} = schema.obj[fieldName]

    switch (instance) {
        case SCHEMA_TYPES.STRING:
            return new ConstructStringField(fieldName, label, schema, component).returnField()
        case SCHEMA_TYPES.BOOLEAN:
            return new ConstructBooleanField(fieldName, label, schema, component).returnField()
        case SCHEMA_TYPES.ARRAY:
            return new ConstructArrayField(fieldName, label, schema, component).returnField()
    }
}
