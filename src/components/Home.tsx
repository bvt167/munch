import React from "react";
import Navbar from "./Navbar";
import Headers from "./Header";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cards = styled.div`
    border-collapse: seperate;
    border-radius: 10px;
    margin-bottom: 50px;
    margin-top: 25px;
    box-shadow: 0px 0px 5px 5px #D3D3D3
`



const Home = (props) => {
  const accountInfo = props.accountInfo;
  const isLoggedIn = props.isLoggedIn;
  console.log(accountInfo);
  console.log(isLoggedIn);

    return (
        <> 
            <Headers />
            <div className="container-fluid">
                <div className="text-center">
                    <img src="../../assets/munchLogo.png" alt="logo" width={"200px"} style={{marginTop: "100px", marginBottom: "10px"}} ></img>
                </div>
                <Link to="/publish">
                    <Cards>
                    <div className="card" style={{borderRadius: "10px"}}>
                        <img src="../../assets/image1.png" alt="Avatar" style={{borderRadius: "10px"}}></img>
                        <div className="container">
                            <h4 className="text-center"> Make new post </h4>
                        </div>
                    </div>
                    </Cards>
                </Link>
                <Link to="/viewpost">
                    <Cards>
                    <div className="card" style={{borderRadius: "10px"}}>
                        <img src="../../assets/image2.png" alt="Avatar"></img>
                        <div className="container">
                            <h4 className="text-center"> View all posts </h4>
                        </div>
                    </div>
                    </Cards>
                </Link>
                <Link to="/tips">
                    <Cards>
                    <div className="card" style={{borderRadius: "10px"}}>
                        <img src="../../assets/image3.png" alt="Avatar"></img>
                        <div className="container">
                            <h4 className="text-center"> Tips for posting </h4>
                        </div>
                    </div>
                    </Cards>
                </Link>
            </div>
        </>
    )
}

export default Home;