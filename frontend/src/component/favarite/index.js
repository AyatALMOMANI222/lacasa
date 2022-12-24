import { useState } from "react";
const Favarite = () => {
  let favorite = JSON.parse(localStorage.getItem("favorite")) || [];
  const [fav, setFav] = useState(favorite);
  return (
    <div className="home">
      {fav.map((e, i) => {
        return (
          <div key={i} className="card">
            <img className="img_menu" src={e.img} />
            <p>{e.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Favarite;
