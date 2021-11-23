import React from "react";
import { TextField, Button, Box, Grid, Paper, MenuItem, FormControlLabel, RadioGroup, Radio, ClickAwayListener } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';

export default function ShowOptionComponent ({item,key,fieldElement,optionChangeHandler,deleteOptionHandler}) {
    return (
        <>
            <Grid container spacing={5}>
                    <Grid item xs={5}>
                        {fieldElement}
                        <TextField id="input-with-sx" value={item} onChange={optionChangeHandler} variant="standard" />
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={deleteOptionHandler}><CloseIcon /></Button>
                    </Grid>
                </Grid>
        </>
    )
}