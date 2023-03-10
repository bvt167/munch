import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className = "container-fluid">
                <div className="page-header">
                    <div className= "text-center">
                        <button><img src="../../assets/munchLogo.png" alt="logo" onClick={() => navigate("/")}></img></button>
                    </div>
                    <h6 className="text-center"> A Restaurant Boosting App</h6>
                    <div className="container">
                        <nav>
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