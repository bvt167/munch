import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cards = styled.div`
    border-radius: 1px; 
    margin-bottom: 50px;
    margin-top: 25px;
`



const Home = (props) => {
  const accountInfo = props.accountInfo;
  const isLoggedIn = props.isLoggedIn;
  console.log(accountInfo);
  console.log(isLoggedIn);

    return (
        <div className="container-fluid">
            <Navbar />
            <Link to="/publish">
                <Cards>
                <div className="card">
                    <img src="../../assets/image1.png" alt="Avatar"></img>
                    <div className="container">
                        <h4 className="text-center"> Make new post </h4>
                    </div>
                </div>
                </Cards>
            </Link>
            <Link to="/viewpost">
                <div className="card">
                    <img src="../../assets/image2.png" alt="Avatar"></img>
                    <div className="container">
                        <h4 className="text-center"> View all posts </h4>
                    </div>
                </div>
            </Link>
            <div className="card">
                <img src="../../assets/image3.png" alt="Avatar"></img>
                <div className="container">
                    <h4 className="text-center"> Tips for posting </h4>
                </div>
            </div>
        </div>
    )
}

export default Home;