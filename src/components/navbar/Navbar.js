import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar bg-light">
            <div className="container-fluid">
                {/* <ul className="navbar-nav">
                    <li className="nav-item"> */}
                        <Link className="nav-link" to="/">HOME || </Link>
                    {/* </li> */}
                    {/* <li className="nav-item"> */}
                        <Link className="nav-link" to="/contact">CONTACT || </Link>
                    {/* </li> */}
                    {/* <li className="nav-item"> */}
                        <Link className="nav-link" to="/inventory">INVENTORY || </Link>
                    {/* </li> */}
                {/* </ul> */}
            </div>
        </nav>
    )
}