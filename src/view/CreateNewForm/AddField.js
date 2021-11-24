import React, { useState } from "react";
import Dropdown from '../../components/Dropdown';
import AddIcon from '@mui/icons-material/Add';
import { TextField, Button, Box, Grid, Paper, MenuItem, Select, RadioGroup, Radio, ClickAwayListener, Typography } from '@material-ui/core';
import AddOptionComponent from "../../components/AddOptionComponent";
import ShowOptionComponent from "../../components/ShowOptionComponent";
export default function AddField({ field, changeFieldHandler, fieldTypes = [], changeFieldTypeVaue, addQuestionHandler, optionChangeHandler, deleteOptionHandler, addOptionHandler, option, options }) {
    const [inputFieldType, setInputFieldType] = useState()
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
                    {
                        options && options.map((item, key) => (
                            <ShowOptionComponent item={item}
                                key={key}
                                fieldElement={<Radio sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                optionChangeHandler={optionChangeHandler}
                                deleteOptionHandler={() => {
                                    let newArr = [...options]
                                    debugger
                                    newArr.splice(key, 1)
                                    deleteOptionHandler(newArr)
                                }} />
                        ))
                    }
                    <AddOptionComponent
                        option={option}
                        optionChangeHandler={optionChangeHandler}
                        addOptionHandler={addOptionHandler}
                        fieldElement={<Radio sx={{ color: 'action.active', mr: 1, my: 0.5 }} />} />
                </RadioGroup>
            case 'Drop down':
                return <>
                    {
                        options && options.map((item, key) => (
                            <ShowOptionComponent item={item}
                                key={key}
                                fieldElement={<Typography sx={{ color: 'action.active', mr: 1, my: 0.5 }} >{key}</Typography>}
                                optionChangeHandler={optionChangeHandler}
                                deleteOptionHandler={() => {
                                    let newArr = [...options]
                                    debugger
                                    newArr.splice(key, 1)
                                    deleteOptionHandler(newArr)
                                }}  />
                        ))
                    }
                    <AddOptionComponent
                        option={option}
                        optionChangeHandler={optionChangeHandler}
                        addOptionHandler={addOptionHandler}
                        fieldElement={<Typography sx={{ color: 'action.active', mr: 1, my: 0.5 }} >{1}</Typography>} />
                </>
            default:
                return null;
        }
    }
    return (
        <Paper elevation={2} style={{ padding: "5%" }}>
            <Grid spacing={1} container>
                <Grid item xs={7}>
                    <TextField style={{marginTop:"2%"}} id="standard-basic" label="Enter Field" fullWidth value={field} onChange={changeFieldHandler} variant="standard" />
                </Grid>
                <Grid item xs={4}>
                    <Dropdown
                        label="Select Input field Type"
                        data={fieldTypes || []}
                        objKey={"field_type_name"}
                        onChangeListner={(selectedData) => {
                            console.log(selectedData)
                            changeFieldTypeVaue(selectedData)
                            setInputFieldType(selectedData)
                        }}
                        prevData={[]}
                        name={"field_type_name"}
                    />
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" style={{height:"80%"}}onClick={addQuestionHandler}><AddIcon /></Button>
                </Grid>
            </Grid>
            <Box>
                {renderSwitch(inputFieldType)}
            </Box>
        </Paper>
    )
}