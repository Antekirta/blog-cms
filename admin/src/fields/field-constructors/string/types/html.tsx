import React from 'react'
import TextField from "@material-ui/core/TextField"
import {ConstructStringField} from "../construct-string-field";
// @ts-ignore
import CKEditor from '@ckeditor/ckeditor5-react';
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const htmlTypeField = function (this: ConstructStringField) {
    const onChangeHTMLField = (event: React.FormEvent, editor: any) => {
        const data = editor.getData()

        this.component.setFieldValue(this.fieldName, data)
    }

    return (
        <CKEditor
            key={this.fieldName}
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onChange={onChangeHTMLField}
        />
    )
}
