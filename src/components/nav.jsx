import React from "react";
import Logo from '../assets/images/logo.svg';

function Nav() {
    return ( 
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li><img src={Logo} alt="apple logo" /></li>
                    <li><a className="link-styled">Home</a></li>
                    <li><a className="link-styled">About</a></li>
                    <li><a className="link-styled">Contact</a></li>
                    <li><a className="link-styled">Products</a></li>
                    <li><a className="link-styled">Careers</a></li>
                </ul>
            </div>
        </nav>
     );
}

export default Nav;
