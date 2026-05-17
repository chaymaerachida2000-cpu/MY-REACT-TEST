import React from 'react';
import './Navbar.css';

function Navbar() { 
    return(
     < nav className='navBar'>
     <div className="logo">
     <h1>My world</h1>
      </div>
       <ul className='lista'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact-Us</a></li>
       </ul>
    
     </nav>
    ); 
}
    export default Navbar ;  





