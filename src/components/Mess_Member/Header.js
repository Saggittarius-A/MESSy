import React from "react";
import './Style.css';
import MessMenu from "../../MessMenu";
import { Link } from 'react-router-dom';

function Header() {
  return (
    
    <div className="headerfood row">
      <div className="rowblock ">
      <Link to="/MessMenu1">
      <h1 className="food btn-food">Breakfast</h1>
      </Link>
      
      <Link to="/ResultsB">
      <button className="btn-food-result">Poll</button>
      </Link>
      <Link to="/MessMenu1">
      <h1 className="food">Add-on</h1>
      </Link>
      <Link to="/Add">
      <button className="btn-food-result">Poll</button></Link>
      </div>

      <div className="rowblock ">
      <Link to="/MessMenu">
    <h1 className="food btn-food">Lunch</h1>
    </Link>
    <Link to="/ResultsL">
      <button className="btn-food-result">Poll</button>
     </Link>
     <Link to="/MessMenu">
     <h1 className="food">Add-on</h1>
     </Link>
     <Link to="/Addl">
     <button className="btn-food-result">Poll</button>
   </Link>
   </div>
   <div className="rowblock "> 
   <Link to="/MessMenu2"> 
      <h1 className="food btn-food">Dinner</h1>
      </Link>
      <Link to="/ResultsD">
      <button className="btn-food-result">Poll</button>
      </Link>
      <Link to="/MessMenu2">
      <h1 className="food">Add-on</h1>
      </Link>
      <Link to="/Addd">
      <button className="btn-food-result">Poll</button>
      </Link>
    </div>
 </div>
    

  );
}


export default Header;
