import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";



const Navbar = (props) => {
    const navigate = useNavigate();

    return (
        <div className="container p-0" style={{}}>
          <div>
            <IconButton className="homebutton" style={{background: "pink", position: "fixed", marginLeft: "115px", marginBottom: "15px", bottom: "0", width: "55px", height: "55px"}} aria-label="back" onClick={() => navigate("/home")}>
                <HomeIcon htmlColor="#FFFFFF" style={{width: "35px", height: "35px"}} />
            </IconButton>
            <IconButton className="homebutton" style={{background: "pink", position: "fixed", marginLeft: "215px", marginBottom: "15px", bottom: "0", width: "55px", height: "55px"}} aria-label="back" onClick={() => navigate("/home")}>
                <AccountCircleIcon htmlColor="#FFFFFF" style={{width: "35px", height: "35px"}}/>
            </IconButton>
          </div>
          <div className="bg-white" style={{position: "fixed", width: "100%", height: "10%", bottom: "0", borderTop: "solid", borderRadius: "10px"}}></div>
        </div>
    );
};




export default Navbar;