import React from "react";
import styled from "styled-components";

import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import VideocamIcon from '@mui/icons-material/Videocam';
import CollectionsIcon from '@mui/icons-material/Collections';


const Body = styled.div`
    font-family: "Open Sans", Arial, sans-serif;
    min-height: 100vh;
    width: 100%;
    background-color: #fafafa;
    color: #262626;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProfileIMG = styled.div`
    float: left;
    width: calc(33.333% - 1rem);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3rem;

    @media (max-width: 844px) {
        grid-row: 1 / -1;
        float: none;
        width: 100%;
    }
`

const ProfileSetting = styled.div`
    float: left;
    margin-top: 1.1rem;


    @media (max-width: 844px) {
        display: inline-block;
        margin: 15px;
        width: 100%;
    }
`

const ProfileUserName = styled.div`
    display: inline-block;
    font-size: 3.2rem;
    font-weight: 300;

    @media screen and (max-width: 844px) {
        font-size: 18px;
        margin-right: 15px;
    }
`

const ProfileStats = styled.div`
    float: left;
    margin-top: 2.3rem;

    @media screen and (max-width: 40rem) {
        float: none;
        width: auto;
        flex-basis: 100%;
        order: 1;
        margin-top: 1.5rem;
    }


    @media (max-width: 40rem) {
        grid-column: 1 / -1;
        margin: 0;
    }
`

const ProfileStatList = styled.li`
    display: inline-block;
    font-size: 1rem;
    line-height: 1.5;
    margin-right: 4rem;
    cursor: pointer;
    list-style: none;

    .li:last-of-type {
        margin-right: 0;
    }

    @media screen and (max-width: 844px) {
        font-size: 12px;
        flex: 1;
        margin: 0;
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
    display: inline-block;
    font: inherit;
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    cursor: pointer;
    font-size: .5rem;
    line-height: 1.8;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.3rem;
    padding: 0 1rem;
    margin-left: 2rem;
    font-weight: 600; 
    width: 30%;

    @media screen and (max-width: 844px) {
        order: 1;
        padding: 0;
        text-align: center;
        margin-top: 1rem;
        margin-left: 0;
        flex-basis: 100%;
    }

    @media (max-width: 40rem) {
        grid-column: 1 / -1;
        margin: 0;
    }
`

const Profile = styled.div`
    max-width: 900px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 5rem 0;

    .profile::after {
        content: "";
        display: block;
        clear: both;
    }

    @media screen and (max-width: 844px) {
        .profile {
            display: flex;
            flex-wrap: wrap;
            padding: 4rem 0;
        }
        .profile::after {
            display: none;
        }
    }



    @media (max-width: 844px) {
        .profile {
            grid-template-columns: auto 1fr;
            grid-row-gap: 1.5rem;
        }

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

    return (

        <Body>
            <Container>
                <Profile>

                    <ProfileIMG>
                        <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" style={{ borderRadius: "50%", display: "block"}}></img>
                    </ProfileIMG>

                    <ProfileSetting>

                        <ProfileUserName>MunchRestaurants</ProfileUserName>

                        <Button>Edit Profile</Button>
                        <button className="btn profile-settings-btn" aria-label="profile settings" style={{fontSize: "10px", marginLeft: "1rem"}}><i className="fas fa-cog" aria-hidden="true"></i></button>
                    </ProfileSetting>

                    <ProfileStats>

                        <ProfileStatUL>
                            <ProfileStatList><span className="profile-stat-count" style={{ fontWeight: 700 }}>164</span> posts</ProfileStatList>
                            <ProfileStatList><span className="profile-stat-count" style={{ fontWeight: 700 }}>188</span> followers</ProfileStatList>
                            <ProfileStatList><span className="profile-stat-count" style={{ fontWeight: 700 }}>206</span> following</ProfileStatList>
                        </ProfileStatUL>

                    </ProfileStats>

                </Profile>
            </Container>

            <Container>
                <Gallery>

                    <GalleryItem tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt="" />

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

                        <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" className="gallery-image" alt="" />

                        <GalleryItemInfo>

                            <GalleryItemInfoList>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FavoriteIcon /> 89</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><ChatBubbleIcon /> 5</li>
                            </GalleryItemInfoList>

                        </GalleryItemInfo>

                    </GalleryItem>

                    <GalleryItem tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" className="gallery-image" alt="" />

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

                    <GalleryItem tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop" className="gallery-image" alt="" />

                        <GalleryItemType>

                            <span className="visually-hidden">Video</span><i className="fas fa-video" aria-hidden="true"></i>

                        </GalleryItemType>

                        <GalleryItemInfo>

                            <GalleryItemInfoList>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FavoriteIcon /> 38</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><ChatBubbleIcon /> 0</li>
                            </GalleryItemInfoList>

                        </GalleryItemInfo>

                    </GalleryItem>

                    <GalleryItem tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop" className="gallery-image" alt="" />

                        <GalleryItemType>

                            <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>

                        </GalleryItemType>

                        <GalleryItemInfo>

                            <GalleryItemInfoList>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FavoriteIcon /> 47</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><ChatBubbleIcon /> 1</li>
                            </GalleryItemInfoList>

                        </GalleryItemInfo>

                    </GalleryItem>

                    <GalleryItem tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop" className="gallery-image" alt="" />

                        <GalleryItemInfo>

                            <GalleryItemInfoList>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FavoriteIcon /> 94</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><ChatBubbleIcon /> 3</li>
                            </GalleryItemInfoList>

                        </GalleryItemInfo>

                    </GalleryItem>

                    <GalleryItem tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop" className="gallery-image" alt="" />

                        <GalleryItemType>

                            <span className="visually-hidden">Gallery</span><CollectionsIcon sx={{ fontSize: 40 }} />

                        </GalleryItemType>

                        <GalleryItemInfo>

                            <GalleryItemInfoList>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FavoriteIcon /> 52</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><ChatBubbleIcon /> 4</li>
                            </GalleryItemInfoList>

                        </GalleryItemInfo>

                    </GalleryItem>

                    <GalleryItem tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop" className="gallery-image" alt="" />

                        <GalleryItemInfo>

                            <GalleryItemInfoList>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FavoriteIcon /> 66</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><ChatBubbleIcon /> 2</li>
                            </GalleryItemInfoList>

                        </GalleryItemInfo>

                    </GalleryItem>

                    <GalleryItem tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop" className="gallery-image" alt="" />

                        <GalleryItemType>

                            <span className="visually-hidden">Gallery</span><CollectionsIcon sx={{ fontSize: 40 }} />

                        </GalleryItemType>

                        <GalleryItemInfo>

                            <GalleryItemInfoList>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FavoriteIcon /> 45</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><ChatBubbleIcon /> 0</li>
                            </GalleryItemInfoList>

                        </GalleryItemInfo>

                    </GalleryItem>

                    <GalleryItem tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop" className="gallery-image" alt="" />

                        <GalleryItemInfo>

                            <GalleryItemInfoList>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FavoriteIcon /> 34</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><ChatBubbleIcon /> 1</li>
                            </GalleryItemInfoList>

                        </GalleryItemInfo>

                    </GalleryItem>

                    <GalleryItem tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop" className="gallery-image" alt="" />

                        <GalleryItemInfo>

                            <GalleryItemInfoList>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FavoriteIcon /> 41</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><ChatBubbleIcon /> 0</li>
                            </GalleryItemInfoList>

                        </GalleryItemInfo>

                    </GalleryItem>

                    <GalleryItem tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop" className="gallery-image" alt="" />

                        <GalleryItemType>

                            <span className="visually-hidden">Video</span><VideocamIcon sx={{ fontSize: 40 }} />

                        </GalleryItemType>

                        <GalleryItemInfo>

                            <GalleryItemInfoList>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FavoriteIcon /> 30</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><ChatBubbleIcon /> 2</li>
                            </GalleryItemInfoList>

                        </GalleryItemInfo>

                    </GalleryItem>

                </Gallery>

            </Container>

        </Body>
    );
};

export default ViewPost;