import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItem2 from '../Todoitem2.js';

function ResultsB(){
    var itemsBa;
   var itemsB=localStorage.getItem('itemsBr');
   if(itemsB!=null)
     itemsBa=itemsB.split(',');
     else
     itemsBa=["None"];
   return(
       <div className="grid-container">
           <header className="header">
               <h1>Breakfast Menu</h1>
           </header>
           <div>
           {itemsBa.map(item => {
         return (
           <TodoItem2
             title={item}  
           />
         );
       })
     }
          </div>
       </div>
   );
}

export default ResultsB;