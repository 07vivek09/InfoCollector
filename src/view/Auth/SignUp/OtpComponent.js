import React from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OtpInput from 'react-otp-input';
import { Grid, Paper, Typography } from '@mui/material';
import { TextField, Box, Button } from '@material-ui/core';
export default function OtpComponent({backClickHandler,otp,changeOTPHandler,verifyClickHandler,verifyOTP}){
    return (
        <>
        <Button variant="contained"
            style={{ marginLeft: "0%", marginRight: "30%", marginBottom: "5%" }}
            startIcon={<ArrowBackIcon />}
            onClick={backClickHandler}>{"Back"}</Button>
        <Box>
            <Typography style={{ color: "red" }}> Please check your email, we have sent you an OTP</Typography>

            <Typography> Enter One Time Password (OTP) </Typography>
        </Box>
        <Box style={{ marginTop: "5%" }}>
            <OtpInput
                value={otp}
                onChange={changeOTPHandler}
                numInputs={6}
                isInputNum={true}
                separator={<span>-</span>}
                inputStyle={{ width: "70%", border: 0, borderBottom: "1px solid black", height: "150%" }}
                focusStyle={{ outline: "none" }}
            />
            <Button variant="contained" disabled = {verifyOTP}
                style={{ marginTop: "15%", marginLeft: "35%", marginRight: "30%" }}
                onClick={verifyClickHandler}>{verifyOTP ? "Verified" :"Verify"}</Button>
        </Box>
    </>
    )
}