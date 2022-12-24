import { Routes, Route, Link } from "react-router-dom";
import Drinks from "../drinks";
import Favarite from "../favarite";
import Home from "../home";
import Homee from "../hh";
import Moq from "../moq";
import "./style.css"
import Contact from "../contact";
import Sweets from "../sweets";
import Salad from "../salad";
import Pasta from "../pasta";
import Sandwish from "../sandwish";
const Navbar = () => {
  return (
    <div >
      <div className="navv">

      {/* <Link to="/favarite" className="l"> Favarite </Link> */}
      <Link to="/" className="l">Home</Link>
      <Link to="/home" className="l">Pizza</Link>
      <Link to="/drinks" className="l"> Drinks </Link>
      <Link to="/moq" className="l">Appetizers </Link>
      <Link to="/sweets"   className="l"> Sweets </Link>

      <Link to="/salad"   className="l"> Fresh Salad</Link>
      <Link to="/pasta"   className="l"> Pasta </Link>
      <Link to="/sandwish"   className="l"> Sandwiches </Link>
      {/* <Link to="/contact"   className="l"> Contact </Link>
      <Link to="/favarite"   className="l"> Favarite </Link> */}
      </div>
   

    
      <Routes className="n">
      <Route path="/" element={<Homee/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/moq" element={<Moq />} />
        <Route path="/sweets" element={<Sweets/>} />

        <Route path="/salad" element={<Salad/>} />

        
        <Route path="/pasta" element={<Pasta/>} />
        <Route path="/sandwish" element={<Sandwish/>} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/favarite" element={<Favarite />} /> */}
      </Routes>
    </div>
  );
};

export default Navbar;
