import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Add(){
    
   return(
       <div className="grid-container Addonon" >
           <header className="header">
               <h1>Breakfast Add-on</h1>
           </header>
           <div>
           <ul>
                       <li className="list-group-item text-capitalize d-flex justify-content-between my-2"><strong>Aloo Paratha</strong>
                           <p>1</p>
                         </li>
                         <li className="list-group-item text-capitalize d-flex justify-content-between my-2"><strong>Egg BHUji</strong>
                           <p>1</p>
                         </li>
                         <li className="list-group-item text-capitalize d-flex justify-content-between my-2"><strong>Roasted Chicken</strong>
                           <p>0</p>
                         </li>
                       </ul>
          </div>
       </div>
   );
}

export default Add;