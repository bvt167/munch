import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const ConfirmPost = () => {

  const [loaderDisplay, setLoaderDisplay] = useState("block");
  const [pageDisplay, setPageDisplay] = useState("none");
  const navigate = useNavigate();


  const showPageAfterDelay = useCallback(() => {
    setTimeout(showPage, 3000);
  }, []);

  const showPage = () => {
    setLoaderDisplay("none");
    setPageDisplay("block");
  }

  useEffect(() => {
    showPageAfterDelay();
  }, [showPageAfterDelay]);

    return (
      <div className="container-fluid p-0"> 
      <div className="p-0" style={{ width: "390px", height: "95px", background: "linear-gradient(210deg, #FFDD95, #C72785, #6F39C5, #2F46F3 400%)", position: 'absolute', zIndex: -1, marginBottom: "100px", top: "0"}}>
          <img src="../../assets/image4.png" alt="Avatar" style={{width: "390px", marginTop: "55px", borderRadius: "25px"}}></img>
      </div>
            <div id="loader" style={ {display: loaderDisplay} }></div>

            <div style={ {display: pageDisplay} } id="myDiv" className="animate-bottom">
              <h2 style ={{marginTop: "225px", fontWeight: "bold"}}>YAY!</h2>
              <p style={{fontSize: "20px", marginBottom: "1px"}}>People can now see your</p>
              <p style={{fontSize: "20px"}}>post on Instagram.</p>
              <p style={{fontSize: "20px", marginTop:"100px", marginBottom: "5px"}}>To view a post or post again,</p>
              <p style={{fontSize: "20px", fontWeight: "bold"}} onClick={() => navigate("/home")}>Tap here to go back home!</p>
            </div>
        </div>
    );
};




export default ConfirmPost;