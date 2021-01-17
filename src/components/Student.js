import React from 'react'
import { Link } from 'react-router-dom';
import './student.css'

function Student(){
    return(
        <div className="grid-container">
            <header className="header">
                <h1>Hola! Student</h1>
            </header>
            <main>
                <div className="content">
                    <div className="items">
                        <div className="items-name">Breakfast</div>
                        <Link to="/Breakfast">
                        <div className="menu">Menu</div>
                        </Link>
                        
                    </div>

                    <div className="items">
                        <div className="items-name">Lunch</div>
                        <Link to="/Lunch">
                        <div className="menu">Menu</div>
                        </Link>
                       
                    </div>

                    <div className="items">
                        <div className="items-name">Dinner</div>
                        <Link to="/Dinner">
                        <div className="menu">Menu</div>
                        </Link>
                       
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Student;