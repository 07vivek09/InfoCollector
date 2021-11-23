import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';
import { TextField, Box, Button } from '@material-ui/core';
export default function Login() {
    return (
        <Grid container spacing={3}>
            <Grid item sx={5} style={{ width: "40%", marginTop: "5%" }}> InFoCollector</Grid>
            <Grid item sx={1}></Grid>
            <Grid item sx={5} style={{ width: "40%", marginTop: "5%" }}>
            <Paper elevation={3} style={{ padding: "5%" }}>
                    <form onSubmit={formik.handleSubmit}>
                        </form>
                        </Paper>
            </Grid>
        </Grid>
    )
}