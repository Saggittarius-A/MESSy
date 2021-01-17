import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItem2 from '../Todoitem2.js';

function ResultsD(){
    var itemsDa;
    var itemsD1 = localStorage.getItem('itemsDi');
    var itemsD=itemsD1;
      if(itemsD!=null)
      itemsDa=itemsD.split(',');
      else
      itemsDa=["None"];
    return(
        <div className="grid-container">
            <header className="header">
                <h1>Dinner Menu</h1>
            </header>
            <div>
            {itemsDa.map(item => {
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

export default ResultsD;