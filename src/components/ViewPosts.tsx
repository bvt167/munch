import React from "react";
import styled from "styled-components";

import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import VideocamIcon from '@mui/icons-material/Videocam';
import CollectionsIcon from '@mui/icons-material/Collections';
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";


const Body = styled.div`
    font-family: "Open Sans", Arial, sans-serif;
    width: 100%;
    background-color: #fafafa;
    color: #262626;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProfileIMG = styled.div`
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3rem;

    @media (max-width: 844px) {
        grid-row: 1 / -1;
        float: none;

    }
`

const ProfileSetting = styled.div`
    float: left;
    margin-top: 1.1rem;


    @media (max-width: 844px) {
        display: inline-block;
        margin: 0px;
        width: 100%;
    }
`

const ProfileUserName = styled.div`
    display: inline-block;
    font-size: 3.2rem;
    font-weight: 300;

    @media screen and (max-width: 844px) {
        font-size: 24px;
        margin-right: ;
    }
`

const ProfileStats = styled.div`
    float: left;
    width: calc(66.666% - 2rem);
    margin-top: 2.3rem;

    @media screen and (max-width: 40rem) {
        float: none;
        width: auto;
        flex-basis: 100%;
        order: 1;
        margin-top: 0;
        margin-left: -1;
    }


    @media (max-width: 40rem) {
        grid-column: 1 / -1;
        margin: 0;
    }
`

const ProfileStatList = styled.li`
    display: inline-block;
    margin-right: 3rem;
    margin-left: 1rem;
    cursor: pointer;
    list-style: none;
    font-size: 14px;
    flex: 2;

    .li:last-of-type {
        margin-right: 0;
    }

`

const ProfileStatUL = styled.li`
    @media screen and (max-width: 844px) {
        display: flex;
        text-align: center;
        padding: .25rem;
        border-top: 0.1rem solid #dadada;
        border-bottom: 0.1rem solid #dadada;
    }
`

const Button = styled.div`
    font-size: 12px;
    line-height: 1.25rem;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.3rem;
    padding: 0 1rem;
    margin-left: 2rem;
    font-weight: 600;
    text-align: center;

    @media (max-width: 40rem) {
        grid-column: 1 / -1;
        margin: 0;
    }
`

const Profile = styled.div`
    max-width: 900px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 3rem 0;
    padding-top: 0;

    .profile::after {
        content: "";
        display: block;
        clear: both;
    }
    @supports (display: grid) {
    .profile {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: repeat(3, auto);
        grid-column-gap: 3rem;
        align-items: center;
    }

`

const Container = styled.div`
    max-width: 93.5rem;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;

    .visually-hidden {
        position: absolute !important;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);
    }
`

const Gallery = styled.div`
    margin: -1rem -1rem;
    padding-bottom: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
`

const GalleryItemInfo = styled.div`
    display: none;
`

const GalleryItemInfoList = styled.li`
    display: flex;
    list-style: none;
    .gallery-item-likes {
        margin-right: 0.5rem;
    }
    li: {
        display: inline-block;
        font-size: 1.7rem;
        font-weight: 800;
    }
`

const GalleryItem = styled.div`
    position: relative;
    flex: 1 0 22rem;
    color: #fff;
    cursor: pointer;
    .gallery-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    };
    &:focus, &:hover {
        ${GalleryItemInfo} {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
        }
    }
`

const GalleryItemType = styled.div`
    position: absolute;
    top: .5rem;
    right: .5rem;
    text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
`



const ViewPost = (props) => {
  const navigate = useNavigate();

    return (
      <div>
        <IconButton className="bg-black m-2 p-1 align-self-start" aria-label="back" onClick={() => navigate("/home")}>
            <ArrowBack htmlColor="#FFFFFF" />
        </IconButton>
        <Body>
            <Container>
                <Profile>

                    <ProfileIMG>
                        <img src="../../assets/munchInstagramLogo.png" alt="Profile icon" style={{ borderRadius: "50%", display: "block", width: "75px"}}></img>
                    </ProfileIMG>

                    <ProfileSetting>

                        <ProfileUserName>MunchRestaurants</ProfileUserName>

                        <Button>Edit Profile</Button>
                    </ProfileSetting>

                    <ProfileStats className="mt-4">

                        <ProfileStatUL>
                            <ProfileStatList><span className="profile-stat-count" style={{ fontWeight: 700 }}>164</span> posts</ProfileStatList>
                            <ProfileStatList><span className="profile-stat-count" style={{ fontWeight: 700 }}>188</span> followers</ProfileStatList>
                            <ProfileStatList><span className="profile-stat-count" style={{ fontWeight: 700 }}>206</span> following</ProfileStatList>
                        </ProfileStatUL>

                    </ProfileStats>

                </Profile>
            </Container>

            <Container className="mb-5">
                <Gallery>

                    <GalleryItem tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" className="gallery-image" alt="" />

                        <GalleryItemType>

                            <span className="visually-hidden">Gallery</span><CollectionsIcon sx={{ fontSize: 40 }} />

                        </GalleryItemType>

                        <GalleryItemInfo>

                            <GalleryItemInfoList>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FavoriteIcon /> 56</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><ChatBubbleIcon /> 2</li>
                            </GalleryItemInfoList>

                        </GalleryItemInfo>

                    </GalleryItem>

                    <GalleryItem tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1535395155851-2088a2a94701?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" className="gallery-image" alt="" />

                        <GalleryItemInfo>

                            <GalleryItemInfoList>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FavoriteIcon /> 89</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><ChatBubbleIcon /> 5</li>
                            </GalleryItemInfoList>

                        </GalleryItemInfo>

                    </GalleryItem>

                    <GalleryItem tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1627626308695-edc100c56944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" className="gallery-image" alt="" />

                        <GalleryItemType>

                            <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>

                        </GalleryItemType>

                        <GalleryItemInfo>

                            <GalleryItemInfoList>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FavoriteIcon /> 42</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><ChatBubbleIcon /> 1</li>
                            </GalleryItemInfoList>

                        </GalleryItemInfo>

                    </GalleryItem>

                </Gallery>

            </Container>

        </Body>
        <Navbar />
      </div>
    );
};

export default ViewPost;