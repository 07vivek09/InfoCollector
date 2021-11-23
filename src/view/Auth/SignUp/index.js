import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Grid, Paper, Typography } from '@mui/material';
import { TextField, Box, Button } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useFormik } from "formik"
import * as yup from 'yup';
export default function SignUp() {
    const [generateOtp, setGenerateOtp] = useState(false)
    const [verifyOTP, setVerifyOTP] = useState(false)
    const [otp, setOTP] = React.useState('')
    const validationSchema = yup.object({
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
    
      })
    
      const formik = useFormik({
        initialValues: {
          name: "",
          email:"",
          pswd:"",
          confirmPswd:""
        },
         validationSchema:validationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
      })
    return (
        <Grid container spacing={3}>
            <Grid item sx={5} style={{ width: "40%", marginTop: "5%" }}> InFoCollector</Grid>
            <Grid item sx={1}></Grid>
            <Grid item sx={5} style={{ width: "40%", marginTop: "5%" }}>
                <Paper elevation={3} style={{ padding: "5%" }}>
                    <form onSubmit={formik.handleSubmit}>
                        <Typography>{"Create New Account"}</Typography>
                        <Box style={{ padding: "5%", width: "80%" }}>
                            {(generateOtp ) ? <>
                                <Button variant="contained"
                                    style={{ marginLeft: "0%", marginRight: "30%", marginBottom: "5%" }}
                                    startIcon={<ArrowBackIcon />}
                                    onClick={() => { setGenerateOtp(!generateOtp) }}>{"Back"}</Button>
                                <Box>
                                    <Typography style={{ color: "red" }}> Please check your email, we have sent you an OTP</Typography>

                                    <Typography> Enter One Time Password (OTP) </Typography>
                                </Box>
                                <Box style={{ marginTop: "5%" }}>
                                    <OtpInput
                                        value={otp}
                                        onChange={(event) => {setOTP(event) }}
                                        numInputs={6}
                                        isInputNum={true}
                                        separator={<span>-</span>}
                                        inputStyle={{ width: "70%", border: 0, borderBottom: "1px solid black", height: "150%" }}
                                        focusStyle={{ outline: "none" }}
                                    />
                                    <Button variant="contained" disabled = {verifyOTP}
                                        style={{ marginTop: "15%", marginLeft: "35%", marginRight: "30%" }}
                                        onClick={() => { setVerifyOTP(!verifyOTP) }}>{verifyOTP ? "Verified" :"Verify"}</Button>
                                </Box>
                            </> :
                                <>
                                    <TextField placeholder={"Enter Your Name"} fullWidth name = {"name"} onChange={formik.handleChange} style={{ marginBottom: "5%" }} />
                                    <TextField placeholder={"Email"} fullWidth   name = {"email"} onChange={formik.handleChange}style={{ marginBottom: "5%" }} />
                                    <Button variant="contained"
                                        style={{ marginLeft: "35%", marginRight: "30%" }}
                                        onClick={() => { setGenerateOtp(!generateOtp) }}>{"Generate OTP"}</Button>
                                </>}
                                {
                                    verifyOTP ? <>
                                    <Box style={{ marginBottom: "10%" }} >
                                        <TextField
                                        placeholder ={"Enter Password"} fullWidth  name = {"pswd"} onChange={formik.handleChange} style={{ marginBottom: "5%" }}
                                        />
                                         <TextField
                                        placeholder ={"Confirm Password"} fullWidth  name = {"confirmPswd"} onChange={formik.handleChange} style={{ marginBottom: "5%" }}
                                        />
                                         <Button variant="contained"
                                        style={{ marginLeft: "35%", marginRight: "30%",marginBottom: "5%" }}
                                        type={'submit'}>{"Submit"}</Button>
                                        </Box>
                                    </> : null
                                }
                        </Box>
                    </form>
                </Paper>
            </Grid>
        </Grid>
        // <form  onSubmit={handleSubmit}>
        //     <label htmlFor="Name">Name</label>
        //   <input type="text"
        //     required
        //     onChange={e => setFirstName(e.target.value)}
        //   />
        //     <label htmlFor="email">      </label>
        //   <input type="email"
        //     required
        //     onChange={e => setEmail(e.target.value)}
        //   />
        //   <button>Generate OTP</button>

        //             <OtpInput 
        //     numInputs={6}
        //     separator={<span>-</span>}
        //     isInputSecure
        //     onChange={e=>setOtp({otp})}
        //   />
        //   <button onClick={(e) => setOtp(e.target.value)}>Verify</button>
        //   <label htmlFor="password">Password</label>       
        //   <input type="password"
        //     required
        //     onChange={e => setPassword(e.target.value)}
        //   />
        //   <div>
        //     <input type="submit"  value="Sign Up"/>
        //   </div>
        // </form>
    );
};

