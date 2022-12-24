import { useState } from "react";
import pizza from "./data";
import "./style.css";
const Home = () => {
  const [menu, setMunu] = useState(pizza);
  return (
    <div className="home">
      {menu.map((e, i) => {
        return (
          <div key={i+e} className="card">
            <img className="img_menu" src={e.img} />
            <p className="pp">{e.title}</p>
            <h4>{e.type}</h4>
            <p>{e.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
