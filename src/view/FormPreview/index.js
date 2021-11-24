import React, { Component, useState  } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid,ListItemText ,InputLabel} from '@material-ui/core';
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
import { red } from '@material-ui/core/colors';
import { color } from '@mui/system';

// import Rating from '@mui/material/Rating';
const useStyles = makeStyles((theme) => ({
    style: {

        'color': 'black',
        'backgroundColor':'green'
    },
    head: {
        'textAlign': 'center',
        'border': '3px solid black',
        'margin-left': '25%',
        'margin-right': '25%',
        'margin-top': '10%',
        'margin-bottom': '30px'

    },
    body: {
       
        'margin-left': '25%',
        'margin-right': '25%',
        'margin-top': '20px',
        'margin-bottom': '30px',
        'padding-bottom': '2%',
        'padding-top': '2%',
        'padding-left': '2%',
    },
     button:{
        'margin-left':'3%'
    },
    submitbutton:{
        'margin-left':'45%'
    },
    buttons:{
       'display':'flex',
       'margin-bottom':'10%',
       'margin-left':'32%',
      
    },
    container:{
        'border': '3px solid black',

    },
    typography: {
        width: "50%",
        textDecoration: 'underline'
    },
}));

 function PreviewForm({templateFormat}) {
     console.log(templateFormat.name)
     const [data,setData]=useState(templateFormat.formData ?templateFormat.formData :  {
        id: 1, FormName: 'Registration form Extra', FormDescription: 'sample form', Questions: [
            { Field: 'sample questn Radio', FieldType: 'Radio Buttons', options: ["Male", "Female", "OIther"], answer: "Female" },
            { Field: 'sample questn Dropdown', FieldType: 'DropDown', options: ["Dropdown1", "Dropdown2", "Dropdown3"], answer: "" },
            { Field: 'sample question Shorttext', FieldType: 'Short Text' ,answer: ""}, 
            { Field: 'sample question Paragraph', FieldType: 'Paragraph',answer: "" }, 
            { Field: 'sample questn Long Text', FieldType: 'Long Text',answer: "" }, 
            { Field: 'sample questn', FieldType: 'StarRating',answer: "" },]
    })
    const [selectedValue, setSelectedValue] = React.useState();

    const handleChange = (event,questionNumber) => {
      setSelectedValue(event.target.value);
    let anotherValue = event.target.value
                    let questionData = data.Questions[questionNumber]
                    let newQuestionData = {
                        ...questionData,
                        answer: anotherValue
                    }
                   
                    data.Questions[questionNumber] = newQuestionData
                    console.log("***"+ data.Questions[questionNumber] )
                    let newData = data
                    console.log(newData)
                    setData(newData)
    };

    const handleSubmit=(event,data)=>{
        alert(data.Questions);
        event.preventDefault();
    }

   
    function  handleClick() {
         document.getElementById("formid").reset();
         };


    const classes = useStyles();

   

    const renderSwitch = (fieldTypesInput, options, questionNumber) => {
        let checked=false;
        switch (fieldTypesInput) {
            case 'Short Text':
                return <Box style={{ width: "50%", }}> <TextField fullWidth onChange={(event)=>handleChange(event,questionNumber)} /></Box>;
            case 'Long Text':
                return <Box > <TextField style={{ width: "80%", }}  onChange={(event)=>handleChange(event,questionNumber)}  /></Box>;
            case 'Paragraph':
                return <Box >    <TextField style={{ width: "80%", }} id="outlined-multiline-static" multiline rows={4} defaultValue="" onChange={(event)=>handleChange(event,questionNumber)}  /></Box>;
            case 'Radio Buttons':
                return <RadioGroup  aria-label="" defaultValue="" name="radio-buttons-group" >
                
                    {
                        options && options.map((item, key) => (
                            <Grid item xs={5}>
                                <FormControlLabel value={item} control={<Radio checked={selectedValue === item} onChange={handleChange}/>} label={item} />
                                {/* <Radio sx={{ color: 'action.active', mr: 1, my: 0.5 }} checked={false} onChange={()=>{checked=true}} />
                                <Typography id="input-with-sx"  variant="standard" > {item}</Typography> */}
                            </Grid>
                        ))
                    }
                   
                </RadioGroup>

            case 'DropDown':
                return  <FormControl style={{ width: "20%"}} >
                <InputLabel   htmlFor="name-multiple">Select Options</InputLabel>
                 <Select onChange={handleChange}>
                    {
                    options && options.map((item, index) => {
                        let dataToShow = item;
                        return (
                            <MenuItem   key={dataToShow} value={dataToShow}>
                                <ListItemText    primary={dataToShow} />
                            </MenuItem>
                        )
                    })
                }
                  

                </Select>
                </FormControl>
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
      
        <div style={{backgroundColor:templateFormat.backgroundColor? templateFormat.backgroundColor:"white"}}>
          
                <div style={{ height:"150px", marginLeft:"25%",marginRight:"25% " } } >
                
                {templateFormat.image ? templateFormat.image :null} 
                
                </div>
               

            <form id="formid"  onSubmit={handleSubmit}  >
                <div className={classes.user}>
                    <div className={classes.head} style={{ border: templateFormat.border? templateFormat.border:"3px solid black"}}>
                        <h1>{data && data.FormName} </h1>
                        <h1>{data&& data.FormDescription} </h1>
                    </div>
                    {data&& data.Questions.map((user, key) => (
                        <div className={classes.body} style={{  border: templateFormat.border? templateFormat.border:"3px solid black"}} >
                            <FormLabel >{key + 1}  {user.Field}</FormLabel><br />
                            {renderSwitch(user.FieldType, user.options, key)}
                        </div>

                    ))}

              </div>
              <Button variant="contained" color="primary" className={classes.submitbutton} type="submit">Submit</Button> <br/><br/>
            </form>
            
            <div className={classes.buttons}>

                <Button variant="outlined" color='primary' className={classes.button} type="submit">Preview Response</Button>
                
                <Button variant="outlined" color="primary" className={classes.button} onClick={handleClick} type="reset">Clear Response</Button>
            </div> <br/><br/>
           
           

        </div>
    );

}
export default PreviewForm;