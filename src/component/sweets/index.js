import React from "react";
import { useState } from "react";
import sweets from "./dataswet"
// import addToFavarite from "../../common";
import "./style.css"
const Sweets =()=>{
 
const[swee,setswee] = useState(sweets)





return <div className="m">

{sweets.map((e , i)=>{
    return<div key={i} className="card">
     
        <img className="img_menu" src={e.img}/>
        <p>{e.title}</p>
        <h5>{e.price}</h5>
        {/* <button
              onClick={(e) => {
                addToFavarite(e);
              }}
            >
              Favarite
            </button> */}
    </div> 
})}


</div>






}
export default Sweets