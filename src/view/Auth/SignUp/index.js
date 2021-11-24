import React, { useState,useEffect } from 'react';
import OtpInput from 'react-otp-input';
import { Grid, Paper, Typography } from '@mui/material';
import { TextField, Box, Button } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useFormik } from "formik"
import * as yup from 'yup';
import OtpComponent from './OtpComponent';
import SetPassword from './SetPassword';
import { useDispatch,useSelector } from 'react-redux';
import { findLast } from "lodash"
import { useNavigate } from 'react-router';
import {DoStoreUserDetailsAction} from "../../../redux/actions/AuthActions"
export default function SignUp() {
    const [generateOtp, setGenerateOtp] = useState(false)
    const [verifyOTP, setVerifyOTP] = useState(false)
    const [otp, setOTP] = React.useState('')
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const ui = useSelector((state) => state.ui)
    useEffect(() => {
        if (ui["messages"]) {
          let refObj = findLast(ui["messages"], { key: "save_user_details" });
          //change error to success once server is attached
          if (refObj && refObj.type === "success") {
            navigation("/")
          }
        }
      }, [ui])
    const validationSchema = yup.object({
        name: yup.string("Enter your name")
            .required("Name is required"),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
    })

    const confirmPswdValidationSchema = yup.object({
        pswd: yup
            .string('Enter your Password')
            .required('Password is required'),
        confirmPswd: yup.string().required("Confirm Password is required").when("pswd", {
            is: val => (val && val.length > 0 ? true : false),
            then: yup.string().oneOf(
                [yup.ref("pswd")],
                "Both password need to be the same"
            )
        })
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            // pswd: "",
            // confirmPswd: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
            setGenerateOtp(!generateOtp)
        }
    })
    const confirmPswdFormik = useFormik({
        initialValues: {
            pswd: "",
            confirmPswd: ""
        },
        validationSchema: confirmPswdValidationSchema,
        onSubmit: (values) => {
            console.log(values)
            // setGenerateOtp(!generateOtp)
            debugger
            let userDetails = {
                name: formik.values.name,
                email: formik.values.email,
                pswd: confirmPswdFormik.values.pswd
            }
            dispatch(DoStoreUserDetailsAction({userData : userDetails,key:"save_user_details"}))
            
        }
    })
    return (
        <Grid container spacing={3}>
            <Grid item sx={5} style={{ width: "40%", marginTop: "5%" }}> InFoCollector</Grid>
            <Grid item sx={1}></Grid>
            <Grid item sx={5} style={{ width: "40%", marginTop: "5%" }}>
                <Paper elevation={3} style={{ padding: "5%" }}>
                    <Typography>{"Create New Account"}</Typography>
                    <Box style={{ padding: "5%", width: "80%" }}>
                        {!generateOtp ? <form onSubmit={formik.handleSubmit}>
                            <TextField label={"Enter Your Name"}
                                fullWidth
                                id={"name"}
                                name={"name"}
                                onChange={formik.handleChange}
                                style={{ marginBottom: "5%" }}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name} />
                            <TextField
                                placeholder={"Email"}
                                fullWidth
                                id={"email"}
                                name={"email"}
                                onChange={formik.handleChange}
                                style={{ marginBottom: "5%" }}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email} />
                            <Button variant="contained"
                                type={"submit"}
                                style={{ marginLeft: "35%", marginRight: "30%" }}
                            >{"Generate OTP"}</Button>
                        </form> :
                            verifyOTP && generateOtp ?
                                <form onSubmit={confirmPswdFormik.handleSubmit}>
                                    <SetPassword
                                        onChangeHandler={confirmPswdFormik.handleChange}
                                        enterPasswordError={confirmPswdFormik.touched.pswd && Boolean(confirmPswdFormik.errors.pswd)}
                                        enterPasswordHelperText={confirmPswdFormik.touched.pswd && confirmPswdFormik.errors.pswd}
                                        enterConfirmPasswordError={confirmPswdFormik.touched.confirmPswd && Boolean(confirmPswdFormik.errors.confirmPswd)}
                                        enterConfirmPasswordHelperText={confirmPswdFormik.touched.confirmPswd && confirmPswdFormik.errors.confirmPswd} /></form>
                                :
                                <OtpComponent
                                    backClickHandler={() => { setGenerateOtp(!generateOtp) }}
                                    otp={otp}
                                    changeOTPHandler={(event) => { setOTP(event) }}
                                    verifyClickHandler={() => { setVerifyOTP(!verifyOTP) }}
                                    verifyOTP={verifyOTP}
                                />}

                    </Box>
                </Paper>
            </Grid>
        </Grid>

    );
};

