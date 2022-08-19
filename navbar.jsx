import React from "react";
import {Link, NavLink} from "react-router-dom"
function Navbar()
{
  
    return(
        <nav id="nav">
          <ul>
           
            <li><NavLink to ="/Superheros" id="home"></NavLink></li>
         
          </ul>
        </nav>
    )
}
export default Navbar