import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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