import React from "react";
import CreateUpdateDeleteForm from "./view/FormManagement";
import PreviewForm from './view/FormPreview/index'
import SignUp from "./view/Auth/SignUp";
import registrationimage from '../src/images/bg6.jpg'
import feedbackimage from '../src/images/bg8.png'
import assessmentimage from '../src/images/bg9.jpg'
import contactformimage from '../src/images/contactform.jpg'

const formTemplateObject = {
    image: <img alt="image" src={contactformimage} width="100%" height="250px"  />,
   color: " #23297a", border:'3px solid #696969',backgroundColor:'#f8f4ff',
    buttoncolor:'success',
    
    formData: {
      id: 1, FormName: 'Contact Form ', FormDescription: 'Sample contact form', Questions: [
        { Field: ' Name', FieldType: 'Short Text', answer: "" },
        { Field: 'Email Id', FieldType: 'Short Text', answer: "" },
        { Field: 'Address', FieldType: 'Long Text', answer: "" },
        { Field: 'Phone number', FieldType: 'Short Text', answer: "" },
        { Field: 'comments', FieldType: 'Long Text', answer: "" },
       
     
        
        // { Field: 'sample questn', FieldType: 'StarRating', answer: "" },
      ]
    }
    
  }
const appRoutes = (data) => {
    const routes = [

            {
                path: "/",
                element: <SignUp />
            },
            {
                path:"/createForm",
                element:<CreateUpdateDeleteForm />
            },
            {
                path:"/previewForm",
                element:<PreviewForm templateFormat={formTemplateObject} />
            },

    ]
    return routes.filter(r => r !== undefined || r !== "")
}

export default appRoutes;