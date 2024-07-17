import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { NavLink } from 'react-router-dom'; // Import the NavLink component from react-router-dom
import logo from '../assets/logo2.png'; // Replace with your actual logo image

const Navbar = () => {
   return (
      <div className="navbar">
         <div className="container">
            <div className="navbar-logo">
               <img src={logo} alt="" height={50} width={150} />
            </div>
            <nav>
               <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/feature">Features</NavLink></li>
                  <li><NavLink to="/room">Room</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li>
                  <li><NavLink to="/signup">SignUp</NavLink></li>
               </ul>
            </nav>
         </div>
      </div>
   );
};

export default Navbar;
