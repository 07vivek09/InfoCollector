import React from "react";
import Dropdown from '../../components/Dropdown';
import { TextField, Paper, Button, Box, Grid, Typography,MenuItem,FormControlLabel,RadioGroup,Radio } from '@material-ui/core';
export default function showField({ fieldValue, fieldTypesInput }) {
    const renderSwitch = (fieldTypesInput) => {
        switch (fieldTypesInput) {
            case 'Short Text':
                return <Box style={{ width: "50%", }}> <TextField fullWidth /></Box>;
            case 'Long Text':
                return <Box > <TextField fullWidth /></Box>;
            case 'Paragraph':
                return <Box >    <TextField id="outlined-multiline-static" multiline rows={4} defaultValue="" /></Box>;
            case 'Radio Buttons':
                return <RadioGroup aria-label="" defaultValue="" name="radio-buttons-group" >
                    <FormControlLabel  control={<Radio />} label="Radiobutton1" />
                    <FormControlLabel  control={<Radio />} label="Radiobutton2" />
                    <FormControlLabel  control={<Radio />} label="Radiobutton3" />
                </RadioGroup>
            // case 'DropDown':
                // return <Select>
                //     <MenuItem value="">
                //         <em>None</em>
                //     </MenuItem>
                //     <MenuItem value={10}>Ten</MenuItem>
                //     <MenuItem value={20}>Twenty</MenuItem>
                //     <MenuItem value={30}>Thirty</MenuItem>
                // </Select>
            case 'StarRating':
            // <Rating name="read-only" value='2' readOnly />
            default:
                return null;
        }
    }

    return (
        <Paper elevation={2} style={{ padding: "5%", marginBottom: "5%" }}>
            <Box spacing={1} style={{ marginBottom: "2%" }}>
                <Typography>{fieldValue}</Typography>
                {renderSwitch(fieldTypesInput)}
            </Box>
        </Paper>
    )
}