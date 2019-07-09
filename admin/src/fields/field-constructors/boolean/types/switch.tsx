import React from 'react'
import {ConstructBooleanField} from "../construct-boolean-field"
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"

export const switchFieldType = function (this: ConstructBooleanField) {
    const onChangeSwitchField = (event: React.FormEvent, value: string) => {
        this.component.setFieldValue(this.fieldName, value)
    }

    return (
        <Grid item
              xs={6}>
            <FormControl fullWidth>
                <FormControlLabel
                    control={
                        <Switch
                            onChange={(event: React.FormEvent) => {
                                onChangeSwitchField(event, 'checkedB')
                            }
                            }
                            value="checkedB"
                            color="primary"
                        />
                    }
                    label={this.label}
                />

                <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
        </Grid>
    )
}
