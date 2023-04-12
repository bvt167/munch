import Headers from "./Header";
import React, { useState } from "react";
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
    width: calc(33.333% - 1rem);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 35px;
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

const ProfileName = styled.div`
    display: inline-block;
    font-size: 10px;
    font-weight: 300;
`



const ViewPost = (props) => {

    return (
        <div className="container">

        <Body>
            <div className="profile">
                <Image>
                    <div className="profile-image">

                        <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" style={{borderRadius: "50%"}}></img>

                    </div>
                </Image>
                <div className="profile-user-settings" style={{float: "left", width: "calc(66.666% - 2rem)", marginTop: "25px"}}>

                    <h1 className="profile-user-name" style={{display: "inline-block", fontSize: "25px", fontWeight: "300"}}>MunchRestaurants</h1>

                    <Button><button className="btn profile-edit-btn">Edit Profile</button></Button>

                    <Button><button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button></Button>

                </div>

                <div className="profile-stats" style={{float: "left", width: "calc(66.666% - 2rem)"}}>

                    <ul>
                        <li><span className="profile-stat-count">164</span> posts</li>
                        <li><span className="profile-stat-count">188</span> followers</li>
                        <li><span className="profile-stat-count">206</span> following</li>
                    </ul>

                </div>

                <div className="profile-bio" style={{float: "left", width: "calc(66.666% - 2rem)"}}>

                    <p><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>

                </div>

            </div>
        </Body>
        </div>


    );
};

export default ViewPost;