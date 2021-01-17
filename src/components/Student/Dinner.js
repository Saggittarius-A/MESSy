import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItem1 from '../Todoitem1';
import './index.css';

function Dinner(){
  var itemsDa;
   var itemsD1 = localStorage.getItem('itemsDi');
   var itemsD=itemsD1;
     if(itemsD!=null)
     itemsDa=itemsD.split(',');
     else
     itemsDa=["None"];
   return(
    <div className="container1">
    <header1 className="header1">
     <h1>Dinner Menu</h1>
    </header1>
     <main>
      <div className="row">
        <div className="column">
          <div className="box1">
              <div class="content">
              <div className="title">Add-On</div>
              <div>
              <ul>
                       <li className="list-group-item text-capitalize d-flex justify-content-between my-2"><strong>Sahi Panner</strong>
                           <button>..Eat..</button>
                         </li>
                         <li className="list-group-item text-capitalize d-flex justify-content-between my-2"><strong>Anda Curry</strong>
                           <button>..Eat..</button>
                         </li>
                         <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                           <strong>Mushroom</strong>
                           <button>..Eat..</button>
                           </li>
                       </ul>
          </div>
           
              </div>
          </div>
        </div>
        <div className="column">
        <div className="box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div class="content">
              <div>
           {itemsDa.map(item => {
         return (
           <TodoItem1
             title={item}  
           />
         );
       })
     }
          </div>
           
              </div>
          </div>
    </div>
      </div>
      
  </main>
</div>
 
   );
}

export default Dinner;