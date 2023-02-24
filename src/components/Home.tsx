import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Link, Routes, BrowserRouter as Router} from "react-router-dom";
import Login from "../components/Login";
import CreateAcc from "../components/CreateAcc";
import PublishPost from "../components/PublishPost";

const Home = () => {

    return (
        <div className="container-fluid">
            <Navbar />
                <div className= "row">
                    <div className="col-xs-6 col-md-3">
                        <a href="/" className="thumbnail">
                        <img src="../../assets/temp1.png" alt="temp pic"></img>
                        </a>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <a href="#" className="thumbnail">
                        <img src="../../assets/temp2.png" alt="temp pic"></img>
                        </a>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <a href="#" className="thumbnail">
                        <img src="../../assets/temp3.png" alt="temp pic"></img>
                        </a>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Home;