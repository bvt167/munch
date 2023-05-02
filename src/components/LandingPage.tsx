import React from "react";
import Navbar from "./Navbar";
import Headers from "./Header";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cards = styled.div`
    border-collapse: seperate;
    border-radius: 10px;
    margin-bottom: 100px;
    margin-top: 25px;
    box-shadow: 0px 0px 5px 5px #D3D3D3;
    width: 300px;
    height: 150px;
    margin-left: 30px
`



const Landing = (props) => {


    return (
        <>
        <div className="container d-flex flex-column align-items-center">
            <div>
              <h1 style={{textAlign: "center"}}>Welcome to</h1>
              <img className='m-0 p-0' src='../../assets/munchLogo.png' alt='Munch Logo'></img>
            </div>
        </div>
        <div className="container flex-column align-items-center ">
            <div style={{textAlign: "center", marginTop: "75px"}}>
                <h3 className = "ps-4">We empower restaurants to build</h3>
                <h3 className = "ps-4">lasting customers by establishing</h3>
                <h3 className = "ps-4">community online</h3>
            </div>
        </div>
        </>
    )
}

export default Landing;