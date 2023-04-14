import React, { useCallback, useEffect, useState } from "react";



const ConfirmPost = () => {

  const [loaderDisplay, setLoaderDisplay] = useState("block");
  const [pageDisplay, setPageDisplay] = useState("none");

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
            <div id="loader" style={ {display: loaderDisplay} }></div>

            <div style={ {display: pageDisplay} } id="myDiv" className="animate-bottom">
              <h2>Tada!</h2>
              <p>Some text in my newly loaded page..</p>
            </div>

        </div>
    );
};




export default ConfirmPost;