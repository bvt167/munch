import React from "react";
import styled from "styled-components";


const Headers = () => {

    return (
        <div className="container-fluid p-0"> 
            <div className="p-0" style={{ width: "390px", height: "95px", background: "linear-gradient(210deg, #FFDD95, #C72785, #6F39C5, #2F46F3 400%)", position: 'fixed', zIndex: -1, marginBottom: "100px"}}>
                <img src="../../assets/image4.png" alt="Avatar" style={{width: "390px", marginTop: "55px", borderRadius: "25px"}}></img>
            </div>
        </div>
    );
};




export default Headers;