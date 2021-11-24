import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Box, Grid,Paper } from '@material-ui/core';
import Dropdown from '../../components/Dropdown';
import AddFormField from './AddField';
import ShowField from './ShowField';
const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

export default function CreateUpdateDeleteForm() {
    const classes = useStyles();
    const [addField, setAddField] = useState(false)
    const [questions, setQuestions] = useState([])
    const [field, setField] = useState()
    const [fieldType, setFieldType] = useState()
    const [option, setOption] = useState()
    const [options, setOptions] = useState([])
    const [addOption, setAddOption] = useState(false)
    const fieldTypes = [
        {
            "id": 1,
            "field_type_name": "Short Text"
        },
        {
            "id": 2,
            "field_type_name": "Long Text"
        },
        {
            "id": 3,
            "field_type_name": "Radio Buttons"
        },
        {
            "id": 4,
            "field_type_name": "Paragraph"
        },
        {
            "id": 5,
            "field_type_name": "Drop down"
        }
    ]
    const optionChangeHandler =(event) => { 
        debugger
        setOption(event.target.value) }
    const deleteOptionHandler = (newArr) => {
        
        setOptions(newArr)
    }
    const addOptionHandler = () => {
        debugger
        if (options && options.length > 0) {
            let newArr = [...options, option]
            setOptions(newArr)
        } else {
            let newArr = [option]
            setOptions(newArr)
        }
        setAddOption(true)
        setOption("")
    }
    const changeFieldHandler=(event)=>{
        
        console.log(event.target.value)
        setField(event.target.value)
    }
    const changeFieldTypeVaue =(fieldType)=>{
        
        setFieldType(fieldType)
    }

    const addQuestionHandler = () => {
        setAddField(!addField)
        
        let newQuestion = {
            field: field,
            fieldType: fieldType,
            options : options ? options:null,
        }
        
        if (questions && questions.length > 0) {
            let newArr = [...questions, newQuestion]
            setQuestions(newArr)
        } else {
            let newArr =[newQuestion]
            setQuestions(newArr)
        }
    }
 
    return (
        <Box style={{ margin: "5%", marginLeft: "10%", marginRight: "10%" }}>
            {/* <Button>Preview</Button> */}
            <Box style={{ margin: "5%", marginLeft: "15%", marginRight: "15%", borderTop: "15px solid", borderTopColor: "green", borderRadius: "10%" }}>
                <Paper elevation={2} style={{ padding: "5%" }}>
                <TextField id="outlined-basic" fullWidth label="Form Name" variant="standard" />
                <TextField id="outlined-basic" fullWidth label="Form Description" variant="standard" />
                </Paper>
            </Box>
            <Grid style={{ margin: "5%", marginLeft: "15%", marginRight: "15%" }}>
                <AddFormField 
                addQuestionHandler={addQuestionHandler}
                field={field}
                fieldTypes={fieldTypes}
                changeFieldHandler={changeFieldHandler}
                changeFieldTypeVaue ={changeFieldTypeVaue}
                optionChangeHandler = {optionChangeHandler}
                deleteOptionHandler = {deleteOptionHandler}
                addOptionHandler = {addOptionHandler}
                option={option}
                options={options}/>
            </Grid>
          
            <Grid style={{ margin: "5%", marginLeft: "15%", marginRight: "15%" }}>
                {questions && questions.map(item => 
                    <ShowField 
                    fieldValue ={item.field}
                    fieldTypesInput ={item.fieldType}/>
                )}
            </Grid>

            <Grid style={{ margin: "5%", marginLeft: "15%", marginRight: "15%" }}>
            {/* <Button >Submit Form</Button> */}
            </Grid>
            
        </Box>
    );
}
