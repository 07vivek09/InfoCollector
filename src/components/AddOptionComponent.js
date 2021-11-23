import React from "react";
import { TextField, Button, Box, Grid, Paper, MenuItem, FormControlLabel, RadioGroup, Radio, ClickAwayListener } from '@material-ui/core';

export default function AddOptionComponent ({option,optionChangeHandler,addOptionHandler,fieldElement}) {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <span>{fieldElement}</span>
                <TextField id="input-with-sx" label={"Option "} value={option} onChange={optionChangeHandler} variant="standard" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                {fieldElement}
                <TextField id="input-with-sx" label={"add option"} onClick={addOptionHandler} variant="standard" />

            </Box>
        </>
    )
}