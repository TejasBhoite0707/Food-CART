import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
 

  return (
   
    <BrowserRouter>
     
<Routes>
<Route path="/" element={<Home/>}></Route>
{/* <Route path="/success" element={<Success/>}></Route> */}
<Route path="/Success"
element={<ProtectedRoute element={<Success/>} />}
></Route>
<Route path="/*" element={<Error/>}></Route>
</Routes>
    
    </BrowserRouter>
   )
}

export default App;
