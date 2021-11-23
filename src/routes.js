import React from "react";
import CreateUpdateDeleteForm from "./view/FormManagement";
import PreviewForm from './view/FormPreview/index'
import SignUp from "./view/Auth/SignUp";
import image from '../src/images/bg6.jpg'
const formTemplateObject = {
    image: <img alt="image" src={image} width="100%" height="250px"  />,
    name: "liya", color: " #23297a", border:'3px solid #23297a',
    
    formData: {
      id: 1, FormName: 'Registration Form ', FormDescription: 'Sample description', Questions: [
        { Field: 'Full Name', FieldType: 'Short Text', answer: "" },
        { Field: 'Email Id', FieldType: 'Short Text', answer: "" },
        { Field: 'Phone Number', FieldType: 'Short Text', answer: "" },
        { Field: 'Gender', FieldType: 'Radio Buttons', options: ["Male", "Female", "Other"], answer: "" },
        { Field: 'Marital Status', FieldType: 'DropDown', options: ["Single", "Married", "Not prefer to say"], answer: "" },
        { Field: 'About', FieldType: 'Paragraph', answer: "" },
        // { Field: 'sample questn Long Text', FieldType: 'Long Text', answer: "" },
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