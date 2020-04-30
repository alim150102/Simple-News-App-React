import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const navbar = () =>{
    return(
        <div className="Nav">
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/news'>News</Link></li>
                    <li><Link to='/galery'>Galery</Link></li>
                    <li><Link to='/contact-us'>Contact Us</Link></li>
                </ul>
            </nav>
        </div>
        
    )
}

export default navbar