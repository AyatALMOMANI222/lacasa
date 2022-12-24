import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";

import LocationOnIcon from '@mui/icons-material/LocationOn';
// import Drinks from "../drinks";
// import Favarite from "../favarite";

// import Homee from "../hh";
import Moq from "../moq";
import "./style.css";

const Homee = () => {
  return (
    <div className="all">
      <div className="nav">
        {/* <div className="num">0791221314</div> */}
        <h1 className="nm">La Casa Italino لا كاسا</h1>
      
      </div>

      <div className="men">
        <h1>La Casa Italino</h1>
        <h4>Best Quality and Tasty Food point</h4>

        <h4>
          <a>Menu</a>
        </h4>
        <div className="contack">
          <a href="https://web.facebook.com/lacasazarqa">
            <FacebookSharpIcon />
          </a>
          
          
          <a href="https://www.google.com/maps/dir/32.0899539,36.101836/32.0994444,36.0885556/@32.09479,36.090209,16z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0">
            <LocationOnIcon/>
          </a>
        </div>
        <h4>  call us  0791221314</h4>
      
      </div>
    </div>
  );
};
export default Homee;
