import React from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OtpInput from 'react-otp-input';
import { Grid, Paper, Typography } from '@mui/material';
import { TextField, Box, Button } from '@material-ui/core';
export default function SetPassword({onChangeHandler,enterPasswordError,enterPasswordHelperText,enterConfirmPasswordError,enterConfirmPasswordHelperText}){
    return(
        <Box style={{ marginBottom: "10%" }} >
        <TextField
            placeholder={"Enter Password"}
            fullWidth
            id={"pswd"}
            name={"pswd"}
            type={"password"}
            onChange={onChangeHandler}
            style={{ marginBottom: "5%" }}
            error={enterPasswordError}
            helperText={enterPasswordHelperText}
        />
        <TextField
            placeholder={"Confirm Password"}
            fullWidth
            id={"confirmPswd"}
            name={"confirmPswd"}
            type={"password"}
            onChange={onChangeHandler}
            style={{ marginBottom: "5%" }}
            error={enterConfirmPasswordError}
            helperText={enterConfirmPasswordHelperText}
        />
        <Button variant="contained"
            style={{ marginLeft: "35%", marginRight: "30%", marginBottom: "5%" }}
            type={"submit"}
           >{"Submit"}</Button>
    </Box>
    )
}