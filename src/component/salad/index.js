import React from "react";
import { useState } from "react";
import salad from "./sala";
// import addToFavarite from "../../common/index";
import "./style.css"
const Salad =()=>{

const [sld,setsld] =useState(salad)





return (
    <div className="ca" >

{
    sld.map((element,index)=>{
        return(
            <div className="card">
     <img className="mm" src={element.img}/>
        <p>{element.title}</p>
        <p>{element.price}</p>
        {/* <button onClick={(e)=>{
            addToFavarite(e)
          }}>Favrite</button> */}
            </div>
        )
    })
}

    </div>
)
}

export default Salad