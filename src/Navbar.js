import React from 'react'
import './Agecal/Age.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    
    return (
        <>
        <div className="navbar">
        <p> Pheonix</p>
            <Link className="todo_title" to="/" >Todo </Link>
            <Link className="Age_cal" to="/Age" >
                Age Calculator
            </Link>
        </div>
        
            
        </>
    )
}

export default Navbar
