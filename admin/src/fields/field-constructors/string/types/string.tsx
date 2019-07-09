import React from 'react'
import TextField from "@material-ui/core/TextField"
import {ConstructStringField} from "../construct-string-field";

export const stringTypeField = function (this: ConstructStringField) {
    const onChangeStringField = (event: React.FormEvent): void => {
        const target = event.target as HTMLInputElement

        if (target) {
            this.component.setFieldValue(this.fieldName, target.value)
        }
    }

    return (
        <TextField
            key={this.fieldName}
            onInput={onChangeStringField}
            fullWidth
            label={this.label}/>
    )
}
