import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Addl(){
    
   return(
       <div className="grid-container">
           <header className="header">
               <h1>Breakfast Add-on</h1>
           </header>
           <div>
           <ul>
                       <li className="list-group-item text-capitalize d-flex justify-content-between my-2"><strong>Khichadi</strong>
                           <p>0</p>
                         </li>
                         <li className="list-group-item text-capitalize d-flex justify-content-between my-2"><strong>Egg rice</strong>
                           <p>0</p>
                         </li>
                         <li className="list-group-item text-capitalize d-flex justify-content-between my-2"><strong>Mutton</strong>
                           <p>0</p>
                         </li>
                       </ul>
          </div>
       </div>
   );
}

export default Addl;