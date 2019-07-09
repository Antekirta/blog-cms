import React from 'react'
import * as mongoose from "mongoose";
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import {ConstructField} from "../construct-field";
import {EditingScreen} from "../../../pages/EditingScreen/EditingScreen";

class ConstructArrayField extends ConstructField {
    constructor(fieldName: string, label: string, schema: mongoose.Schema, component: EditingScreen) {
        super(fieldName, label, schema, component)
    }

    public returnField() {
        return (
            <Grid item
                  xs={6}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="age-helper">{this.label}</InputLabel>
                    <Select
                        value={27}
                        input={<Input name="age"
                                      id="age-helper"/>}
                    >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Some important helper text</FormHelperText>
                </FormControl>
            </Grid>
        )
    }
}

export {ConstructArrayField}

