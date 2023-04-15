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
                    <img src="../../assets/munchLogo.png" alt="logo" width={"300px"} style={{marginTop: "100px", marginBottom: "10px"}} ></img>
                </div>
                <Link to="/publish" style={{textDecoration: "none"}}>
                    <Cards>
                    <div className="card" style={{borderRadius: "10px"}}>
                        <img src="../../assets/image1.png" alt="Avatar"></img>
                        <div className="container">
                            <p className="text-center" style={{fontWeight: "bold", fontSize: "20px", marginTop: "5px", marginBottom: "5px"}}> Make new post </p>
                        </div>
                    </div>
                    </Cards>
                </Link>
                <Link to="/viewpost" style={{textDecoration: "none"}}>
                    <Cards>
                    <div className="card" style={{borderRadius: "10px"}}>
                        <img src="../../assets/image2.png" alt="Avatar"></img>
                        <div className="container">
                            <p className="text-center" style={{fontWeight: "bold", fontSize: "20px", marginTop: "5px", marginBottom: "5px"}}> View all posts </p>
                        </div>
                    </div>
                    </Cards>
                </Link>
                <Link to="/viewpost" style={{textDecoration: "none"}}>
                    <Cards>
                    <div className="card" style={{borderRadius: "10px", marginBottom: "25px"}}>
                        <img src="../../assets/image3.png" alt="Avatar"></img>
                        <div className="container">
                            <p className="text-center" style={{fontWeight: "bold", fontSize: "20px", marginTop: "5px", marginBottom: "5px"}}> Tips for posting </p>
                        </div>
                    </div>
                    </Cards>
                </Link>
            </div>
            <Navbar />
        </>
    )
}

export default Home;