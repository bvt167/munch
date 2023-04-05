import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <div style={{ paddingLeft: '5%', paddingRight: '3%'}}>
            <div className = "container-fluid">
                <div className="page-header">
                    <div className="container">
                        <nav className="navbar">
                        <Link to ="/">
                            <img src="../../assets/munchLogo.png" alt="logo" ></img>
                        </Link>
                            <ul className="nav nav-pills">
                                    <li>
                                        <Link to="/"> Home </Link>
                                    </li>
                                    <li>
                                        <Link to="/login"> Login </Link>
                                    </li>
                                    <li>
                                        <Link to="/create"> Create Account </Link>
                                    </li>
                                    <li>
                                        <Link to="/publish"> Publish Post </Link>
                                    </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Navbar;