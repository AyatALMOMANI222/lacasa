import React from "react";
import pasta from "./datapas";
import { useState } from "react";
// import addToFavarite from "../../common";
import "./style.css";

const Pasta = () => {
  const [past, setpast] = useState(pasta);
  return (
    <div className="allimg" >
      {past.map((e, i) => {
        return (
          <div className="alll">
            <img className="imgg" src={e.img} />
            <h5>{e.title}</h5>
            <p>{e.price}</p>
            {/* <button
              onClick={(e) => {
                addToFavarite(e);
              }}
            >
              Favarite
            </button> */}

          </div>
        );
      })}
    </div>
  );
};
export default Pasta;
