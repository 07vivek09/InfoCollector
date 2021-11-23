import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField,Grid } from '@material-ui/core';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Menu from '@material-ui/core/Menu';
import Select from '@material-ui/core/Select';

// import Rating from '@mui/material/Rating';
const useStyles = makeStyles((theme) => ({
    style: {

        'color': 'black'
    },
    head: {
        'textAlign': 'center',
        'border': '3px solid black',
        'margin-left': '10%',
        'margin-right': '10%',
        'margin-top': '20px',
        'margin-bottom': '30px'

    },
    body: {
        'border': '3px solid black',
        'margin-left': '10%',
        'margin-right': '10%',
        'margin-top': '20px',
        'margin-bottom': '30px',
        'padding-bottom': '2%',
        'padding-top': '2%',
        'padding-left': '2%',
    },
    button: {
        'margin-left': '45%'
    },
    typography: {
        width: "50%",
        textDecoration: 'underline'
    },
}));

export default function PreviewForm() {
    const classes = useStyles();

    const data = { id: 1, FormName: 'Registration form', FormDescription: 'sample form', Questions: [
        { Field: 'sample questn Radio', FieldType: 'Radio Buttons', options: ["Male", "Female","OIther"],answer:"Female" },
         { Field: 'sample second question', FieldType: 'LongText' }, { Field: 'sample third question', FieldType: 'Paragraph' }, { Field: 'sample questn', FieldType: 'RadioButton' }, { Field: 'sample questn', FieldType: 'DropDown' }, { Field: 'sample questn', FieldType: 'StarRating' },] }

    const renderSwitch = (fieldTypesInput, options,questionNumber) => {
        switch (fieldTypesInput) {
            case 'Short Text':
                return <Box style={{ width: "50%", }}> <TextField fullWidth /></Box>;
            case 'Long Text':
                return <Box > <TextField fullWidth /></Box>;
            case 'Paragraph':
                return <Box >    <TextField id="outlined-multiline-static" multiline rows={4} defaultValue="" /></Box>;
            case 'Radio Buttons':
                return <RadioGroup aria-label="" defaultValue="" name="radio-buttons-group" >
                    {
                        options && options.map((item, key) => (
                            <Grid item xs={5}>
                                <Radio sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <Typography id="input-with-sx"  variant="standard" > {item}</Typography>
                            </Grid>
                        ))
                    }
                </RadioGroup>
            // case 'Drop down':
            //     return <>
            //         {
            //             options && options.map((item, key) => (
            //                 <ShowOptionComponent item={item}
            //                     key={key}
            //                     fieldElement={<Typography sx={{ color: 'action.active', mr: 1, my: 0.5 }} >{key}</Typography>}
            //                     optionChangeHandler={optionChangeHandler}
            //                     deleteOptionHandler={() => {
            //                         let newArr = [...options]
            //                         debugger
            //                         newArr.splice(key, 1)
            //                         deleteOptionHandler(newArr)
            //                     }} />
            //             ))
            //         }
            //         <AddOptionComponent
            //             option={option}
            //             optionChangeHandler={optionChangeHandler}
            //             addOptionHandler={addOptionHandler}
            //             fieldElement={<Typography sx={{ color: 'action.active', mr: 1, my: 0.5 }} >{1}</Typography>} />
            //     </>
            default:
                return null;
        }
    }
    // Return JSX code
    return (
        <div>

            <div className={classes.user}>
                <div className={classes.head}>
                    <h1>{data.FormName} </h1>
                    <h1>{data.FormDescription} </h1>
                </div>
                {data.Questions.map((user, key) => (
                    <div className={classes.body} >
                        <FormLabel>{key + 1}  {user.Field}</FormLabel><br />
                        {renderSwitch(user.FieldType, user.options,key)}
                    </div>

                ))}

            </div>
            <Button variant="contained" color="primary" className={classes.button} type="submit">Submit</Button>


        </div>
    );

}
