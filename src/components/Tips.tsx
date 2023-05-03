import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Headers from "./Header";
import Navbar from "./Navbar";




const Tips = () => {


    return (
        <>
        <Headers />


        <div className="container flex-column align-items-center ">
            <div style={{textAlign: "center", marginTop: "15px"}}>
                <h3>Here are some helpful tips to improve your post!</h3>
                <h5>Scroll to find out more</h5>
                <KeyboardArrowDownIcon htmlColor="#000000" />
            </div>
        </div>

        <div className="container flex-column align-items-center ">
            <div className="card" style={{marginTop: "75px", borderColor: "light-gray", borderWidth: "2px"}}>
                <a href="https://seedspot.org/archives/11110?utm_source=google&utm_medium=cpc&utm_term=&gad=1&gclid=Cj0KCQjw6cKiBhD5ARIsAKXUdya8bqqig5kE-wQ0Phnd-amdiX7bagyuHU8YtIY-LWW7koL2BCWHskYaAvJfEALw_wcB">
                    <img src="../../assets/tips1.png" alt="tip 1" style={{borderRadius: "2%", width: "100%", height: "220px"}}></img>
                    <p style={{textAlign: "center", textDecoration: "none", color: "black"}}>Break out of your Rut!</p>
                </a>
            </div>
            <div className="card" style={{marginTop: "75px", borderColor: "light-gray", borderWidth: "2px"}}>
                <a href="https://restaurants.quandoo.com/en-sg/blog/restaurant-instagram-marketing">
                    <img src="../../assets/tips2.png" alt="tip 2" style={{borderRadius: "2%", width: "100%", height: "220px"}}></img>
                    <p style={{textAlign: "center", textDecoration: "none", color: "black"}}>Restaurant Instagram Marketing</p>
                </a>
            </div>
            <div className="card" style={{marginTop: "75px", borderColor: "light-gray", borderWidth: "2px"}}>
                <a href="https://www.hopperhq.com/blog/restaurant-marketing-instagram/">
                    <img src="../../assets/tips3.png" alt="tip 3" style={{borderRadius: "2%", width: "100%", height: "220px"}}></img>
                    <p style={{textAlign: "center", textDecoration: "none", color: "black"}}>Master Restaurant Marketing!</p>
                </a>
            </div>
            <div className="card" style={{marginTop: "75px", borderColor: "light-gray", borderWidth: "2px"}}>
                <a href="https://restaurant.eatapp.co/blog/instagram-post-ideas-restaurant">
                    <img src="../../assets/tips4.png" alt="tip 4" style={{borderRadius: "2%", width: "100%", height: "220px"}}></img>
                    <p style={{textAlign: "center", textDecoration: "none", color: "black"}}>Creative Instagram Post Ideas</p>
                </a>
            </div>
        </div>

        <div className="container flex-column align-items-center ">
            <div style={{textAlign: "center", marginTop: "200px"}}>
                <p>
                    Munch Restaurants founded in 2023.
                </p>
            </div>
        </div>
        <Navbar />
        </>
    )
}

export default Tips;