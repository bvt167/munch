import React from "react";
import styled from "styled-components";

const Body = styled.div`
    font-family: "Open Sans", Arial, sans-serif;
    min-height: 100vh;
    background-color: #fafafa;
    color: #262626;
    padding-bottom: 3rem;
`

const Image = styled.div`
    float: left;
    width: 100px;
    display: flex;
    align-items: center;
    margin-right: 3px;
`

const Button = styled.div`
    display: inline-block;
    font: inherit;
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    cursor: pointer;
`



const ViewPost = (props) => {

    return (
        <div className="container" style={{maxWidth: "93.5rem", margin: "0 auto", padding: "0 1rem"}}>
            
        <Body>
            <div className="profile" style={{padding: "1rem 0"}}>
                <Image>
                    <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" style={{display: "block", borderRadius: "50%", width: "75px", height: "75px"}}></img>
                </Image>
                <div className="profile-user-settings" style={{float: "left", marginTop: "25px"}}>

                    <h1 className="profile-user-name" style={{display: "inline-block", fontSize: "15px", fontWeight: "300"}}>MunchRestaurants</h1>

                    <button className="btn profile-edit-btn" style={{display: "inline-block", font: "inherit", background: "none", color: "inherit", cursor: "pointer", fontSize: "8px", lineHeight: "1.8", border: "0.1rem solid #dbdbdb", borderRadius: "0.3rem", padding: "0 1rem", marginLeft: "5px"}}>Edit Profile</button>
                </div>

                <div className="profile-stats" style={{float: "left", width: "", marginTop: "1rem"}}>

                    <ul>
                        <li style={{display: "inline-block", fontSize: "12px", lineHeight: "1", marginRight: "1rem", cursor: "pointer"}}><span className="profile-stat-count">164</span> posts</li>
                        <li style={{display: "inline-block", fontSize: "12px", lineHeight: "1", marginRight: "1rem", cursor: "pointer"}}><span className="profile-stat-count">188</span> followers</li>
                        <li style={{display: "inline-block", fontSize: "12px", lineHeight: "1", marginRight: "1rem", cursor: "pointer"}}><span className="profile-stat-count">206</span> following</li>
                    </ul>

                </div>
            </div>
        </Body>
        </div>


    );
};

export default ViewPost;