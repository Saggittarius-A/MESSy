import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItem2 from '../Todoitem2.js';

function ResultsL(){
    var itemsLa;
  var itemsL=localStorage.getItem('itemsN');

   if(itemsL!=null)
      itemsLa=itemsL.split(',');
   else
      itemsLa=["None"];
    return(
        <div className="grid-container">
            <header className="header">
                <h1>Lunch Menu</h1>
            </header>
            <div>
            {itemsLa.map(item => {
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

export default ResultsL;