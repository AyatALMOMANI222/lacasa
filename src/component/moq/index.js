import React from "react";
// import addToFavarite from "../../common";
import "./style.css";

const Moq = () => {
  const moqabelat = [
    {
      title: "بطاطا فرايز",

      price: "صغير:" +" 0.75 "+" كبير: "+" 1.5",
      img: require("../../imges/potato.jpg"),
    },

    {
      title: "بطاطا ويجز",

      price: "صغير:" +" 1.00 "+" كبير: "+" 2.00",
      img: require("../../imges/pw.jpg"),
    },

    {
      title: "  اصابع موزريلا 4 قطع",

     
      img: require("../../imges/moz.jpg"),
      price: 1.75+"jd"
 
    },

    {
      title: " حلقات البصل 4 قطع",

      price: 1.25+"jd",
      img: require("../../imges/psl.webp"),
    },

   

    {
      title: " خبز مثوم 4قطع",

      price: 1.25+"jd",
      img: "https://img-global.cpcdn.com/recipes/f0c1d076c592d31c/1200x630cq70/photo.jpg",
    },
  ];

  return (
    <div className="home">
      {/* <img src={require("../../imges/nut.jpg")}/> */}
      {moqabelat.map((e, i) => {
        return (
          <div key={i} className="card">
            <img className="img_menu" src={e.img} />
            <p>{e.title}</p>
            <h5>{e.price}</h5>
            {/* <button
              onClick={(e) => {
                addToFavarite(e);
              }}
            >
              Favrite
            </button> */}
          </div>
        );
      })}
    </div>
  );
};

export default Moq;
