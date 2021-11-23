import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';
import { TextField, Box, Button } from '@material-ui/core';
import { useFormik } from "formik"
import * as yup from 'yup';
export default function Login() {

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        pswd: yup
            .string('Enter your password')
            .required('Password is required')

    })
    const formik = useFormik({
        initialValues: {
            email: "",
            pswd: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // console.log(values)
        }
    })
    return (
        <Grid container spacing={3}>
            <Grid item sx={5} style={{ width: "40%", marginTop: "5%" }}> InFoCollector</Grid>
            <Grid item sx={1}></Grid>
            <Grid item sx={5} style={{ width: "40%", marginTop: "5%" }}>
                <Paper elevation={3} style={{ padding: "5%" }}>
                    <form onSubmit={formik.handleSubmit}>
                        <Typography>Login</Typography>
                        <TextField
                        label={" Email"} 
                        fullWidth 
                        id={"email"} 
                        name={"email"} 
                        onChange={formik.handleChange} 
                        style={{ marginBottom: "5%" }}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                         />
                        <TextField 
                        label={"Password"} 
                        fullWidth 
                        id={"pswd"} 
                        name={"pswd"} 
                        onChange={formik.handleChange} 
                        style={{ marginBottom: "5%" }}
                        error={formik.touched.pswd && Boolean(formik.errors.pswd)}
                        helperText={formik.touched.pswd && formik.errors.pswd} />
                        <Button variant="contained"
                          type={"submit"}
                            style={{ marginLeft: "35%", marginRight: "30%" }}
                        >{"Login"}</Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}