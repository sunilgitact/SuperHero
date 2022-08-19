import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Superheros()
{
    let[list,setList]=useState({})
    let[id,setId]=useState()
    const[idFromButtonClick,setidFromButtonClick]=useState()

    let navigate=useNavigate()

    const handleclick=()=>{
        setidFromButtonClick(id)
    }

    
    useEffect(()=>{
       
        axios.get(` https://akabab.github.io/superhero-api/api/id/${idFromButtonClick}.json `)
        .then((responce)=>
        {
            setList(responce.data)
            console.log(responce.data);
            console.log(list.biography.fullName.data);
        })
        .catch((error)=>
        {
            console.log(error); 
        })

    },[idFromButtonClick])

    return(
        <div>
            <h1 id="SuperHeros">SuperHeros</h1>


          
            <input  onChange={(e)=>{setId(e.target.value)}} placeholder='search the id' type="text" value={id} id="placeholder"/>

            
            
            <button type="btn" onClick={handleclick} id="btn">Submit</button>


            <center>
          
    
            <div className="card">
            {/* <h4>Durability:{list.powerstats.durability}</h4> */}
                <h3 id="data" >Id:{list.id}</h3>
                <h4 id="data" >Name:{list.name}</h4>
                <h5 id="data" >Slug:{list.slug}</h5>
                {/* <img src={list.images.lg} alt="" width="200px" height="300px"/> 
                  <h4>Intelligence:{list.powerstats.intelligence}</h4>
                 <h4>Strength:{list.powerstats.strength}</h4>
                 <h4>Speed:{list.powerstats.speed}</h4>
                 <h4>Durability:{list.powerstats.durability}</h4>

                 <h4>Biography:{list.biography.fullName}</h4>   */}

            </div>

            </center>
        </div>
    )
}