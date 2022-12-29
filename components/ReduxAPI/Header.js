import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header-container' >
            <div>
                <Link to="/home">Home</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <div>
                <Link to="/contact">Contact</Link>
            </div>
            <div>
                <Link to="/logreg">Login/Register</Link>
            </div>
        </div>
    )
}



