import React from "react";
import CreateUpdateDeleteForm from "./view/FormManagement";
import PreviewForm from "./view/FormPreview";
import SignUp from "./view/Auth/SignUp";
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
                element:<PreviewForm />
            },

    ]
    return routes.filter(r => r !== undefined || r !== "")
}

export default appRoutes;