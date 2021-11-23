import React from "react"
import { useRoutes } from "react-router-dom"
import appRoutes from "./routes";
import Snackbar from "../src/components/Snackbar"
// import CreateUpdateDeleteForm from "./view/FormManagement";
// import  Snackbar from "./components/Snackbar";
import { useSelector } from "react-redux"
function App() {
  const showLayout = true
  const routing = useRoutes(appRoutes(showLayout))

 
  return (
    <div className="App">
      {routing}
      <Snackbar />

      
      {/* <PreviewForm data={[{name:"liya", color:"red"}]}/> */}

    </div>
  );
}

export default App;
