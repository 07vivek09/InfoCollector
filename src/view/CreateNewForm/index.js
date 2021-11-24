import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Box, Grid, Paper } from '@material-ui/core';
import { DoGetFormTypesAction } from "../../redux/actions/FormActions"
import { useDispatch, useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

export default function FormManagement() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const formTypes = useSelector((state)=>state.form && state.form.formTypes)
    // useEffect(() => {
    //     dispatch(DoGetFormTypesAction())
    // }, [])


    return (
        <Box style={{ margin: "5%", marginLeft: "10%", marginRight: "10%" }}>
            <Paper elevation={3} style={{ padding: "3%" }}>
                <Typography variant="h5">{'Choose Form Type'}</Typography>
                <Grid container spacing={2}>
                {
                   formTypes&& formTypes.map((formType)=>(
                        <Grid item elevation={3} alignItems={"center"} alignContent={"center"} style={{ padding: "3%",backgroundColor:"palevioletred",margin:"2%",width:"15%" }}>
                                <Typography variant="h7">{formType.form_type_name}</Typography>
                        </Grid>
                    ))
                }
                </Grid>
                <Typography variant="h5">{'Choose Form Template'}</Typography>
                <Grid container spacing={2}>
                {
                   formTypes&& formTypes.map((formType)=>(
                        <Grid item elevation={3} alignItems={"center"} alignContent={"center"} style={{ padding: "3%",backgroundColor:"palevioletred",margin:"2%",width:"15%" }}>
                                <Typography variant="h7">{formType.form_type_name}</Typography>
                        </Grid>
                    ))
                }
                </Grid>
            </Paper>
        </Box>
    );
}
