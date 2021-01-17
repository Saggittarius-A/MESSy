import React from 'react'
import TodoItem from '../TodoItem'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItem1 from '../Todoitem1';
import './index.css';

var itemsL;

function Lunch(){
   var itemsLa;
   itemsL=localStorage.getItem('itemsN');

   if(itemsL!=null)
      itemsLa=itemsL.split(',');
   else
      itemsLa=["None"];
    return(
      <div className="container1">
      <header1 className="header1">
       <h1>Breakfast Menu</h1>
      </header1>
       <main>
        <div className="row">
          <div className="column">
            <div className="box1">
                <div class="content">
                <div className="title">Add-On</div>
                <div>
                <ul>
                       <li className="list-group-item text-capitalize d-flex justify-content-between my-2"><strong>Khichadi</strong>
                           <button>..Eat..</button>
                         </li>
                         <li className="list-group-item text-capitalize d-flex justify-content-between my-2"><strong>egg rice</strong>
                           <button>..Eat..</button>
                         </li>
                         <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                           <strong>Mutton</strong>
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
            {itemsLa.map(item => {
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

export default Lunch;