import { elementAcceptingRef } from "@mui/utils";
import React, { useState } from "react";
import sand from "./datas";
// import addToFavarite from "../../common";

import "./style.css";

const Sandwish = () => {
  const [san, setsan] = useState(sand);

  return (
    <div className="san">
      {san.map((e, i) => {
        return (
          <div className="card">
            <img className="mg" src={e.img} />
            <h5>{e.title}</h5>
            <h5>{e.price}</h5>
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

export default Sandwish;
