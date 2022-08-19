import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Superheros from "./Info"
import Navbar from "./navbar"

// import Jspiders from "./jspiders"
// import Students from "./students"
function App()
  {
    return( 
        <>
        <BrowserRouter>
        <Navbar/>
          <Routes>
          
            <Route path="superHeros" element={<Superheros/>}/>
            <Route path="navbar" element={<Navbar/>}/>
           
          </Routes>
        </BrowserRouter>

        </>
    )
  }
  export default App


