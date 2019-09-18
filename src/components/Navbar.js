import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div className= "flex around">
            <Link to= "/about"> <h2>ABOUT</h2> </Link>
            <Link to= "/works"> <h2>WORKS</h2> </Link>    
            <Link to= "/jobs"> <h2>JOBS</h2> </Link>    
            <Link to= "/blog"> <h2>BLOG</h2> </Link>
            <Link to= "/contact"> <h2>CONTACT</h2> </Link>              
        </div>
    )
}
