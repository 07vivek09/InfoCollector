import React,{useEffect,useState} from 'react'
import { Grid, Paper, Typography } from '@mui/material';
import { TextField, Box, Button } from '@material-ui/core';
import { useFormik } from "formik"
import { Navigate, useNavigate } from 'react-router';
import {DoGetAllUsersListAction} from "../../../redux/actions/AuthActions"
import * as yup from 'yup';
import { useDispatch,useSelector } from 'react-redux';
export default function Login() {
    const navigation = useNavigate()
    const dispatch=useDispatch()
    const [err, setErr] = useState()
    const usersList = useSelector((state) => state.auth && state.auth.usersList)
    useEffect(()=>{
        dispatch(DoGetAllUsersListAction())
    },[])
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
            debugger
            let loggedinUser 
            usersList.map(users=>{
                if(users.email == values.email){
                    if(users.pswd == values.pswd){
                        loggedinUser = {
                            ...users
                        }
                    }else{
                        setErr("Kindly check your credentials")
                    }
                    
                }
            })
            if(loggedinUser == undefined && (err == "" || err == undefined)){
                setErr("User is not in our database")
            }
            if(loggedinUser){
                navigation('/home')
            }
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
                        <p style={{color:"red"}}>{err}</p>
                        <TextField
                            label={" Email"}
                            fullWidth
                            id={"email"}
                            name={"email"}
                            onChange={formik.handleChange}
                            style={{ marginBottom: "5%" }}
                            error={(formik.touched.email && Boolean(formik.errors.email))}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            label={"Password"}
                            fullWidth
                            id={"pswd"}
                            name={"pswd"}
                            type={"password"}
                            onChange={formik.handleChange}
                            style={{ marginBottom: "5%" }}
                            error={(formik.touched.pswd && Boolean(formik.errors.pswd)) }
                            helperText={formik.touched.pswd && formik.errors.pswd} />

                        <Typography> {"New here?"}
                            <Button color={"secondary"}
                                style={{ textTransform: "none", fontSize: "1.1em", color: "blueviolet", fontWeight: 'bold' }}
                                onClick={()=>{navigation("/signup")}}>{"Sign In"}
                            </Button>
                        </Typography>
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