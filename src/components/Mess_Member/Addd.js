import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Addd(){
    
   return(
       <div className="grid-container">
           <header className="header">
               <h1>Breakfast Add-on</h1>
           </header>
           <div>
           <ul>
                       <li className="list-group-item text-capitalize d-flex justify-content-between my-2"><strong>Sahi Panner</strong>
                           <p>0</p>
                         </li>
                         <li className="list-group-item text-capitalize d-flex justify-content-between my-2"><strong>Anda curry</strong>
                           <p>0</p>
                         </li>
                         <li className="list-group-item text-capitalize d-flex justify-content-between my-2"><strong>Mushroo </strong>
                           <p>0</p>
                         </li>
                       </ul>
          </div>
       </div>
   );
}

export default Addd;