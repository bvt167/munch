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

const Profile = styled.div`
    max-width: 900px;
    display: grid;
    grid-template-columns: 1fr 3fr;

    .profile-img {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        margin-left: 2rem;
        width: 150px;
        height: 150px;

        @media (max-width: 768px) {
            width: 150px;
            height: 150px;
        }
    }

    .profile-details {
        display: flex;
        flex-direction: column;
        gap: 5px; 
        margin: 2rem 1rem 4rem 1rem;

        @media (max-width: 768px) {
            margin: 2px 0 4rem 0;
        }
        .btn {
            display: inline-block;
            font: inherit;
            background: none;
            border: none;
            color: inherit;
            padding: 0;
            cursor: pointer;
        }

        .btn:focus {
            outline: 0.5rem auto #4d90fe;
        }

        .profile-user-settings {
            padding: 20px;
            display: flex;
            align-items: center;
        }
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
            <Profile>

                <div className="profile-img">
                    <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" style={{ borderRadius: "50%", width: "100%", height: "100%" }}></img>
                </div>

                <div className="profile-details">
                    <div className="profile-user-settings">

                        <h1 className="profile-user-name" style={{ display: "inline-block", fontSize: "27px", fontWeight: "900", letterSpacing: 1.1 }}>MunchRestaurants</h1>

                        <button className="btn profile-edit-btn" style={{ display: "inline-block", font: "inherit", background: "none", color: "inherit", cursor: "pointer", fontSize: "10px", lineHeight: "1.8", border: "0.1rem solid #dbdbdb", borderRadius: "0.3rem", padding: "0 1rem", marginLeft: "5px" }}>Edit Profile</button>
                    </div>

                    <div className="profile-stats">

                        <ul>
                            <li style={{ display: "inline-block", fontSize: "18px", fontWeight: 500, lineHeight: "1", marginRight: "1rem", cursor: "pointer" }}><span className="profile-stat-count" style={{ fontWeight: 700 }}>164</span> posts</li>
                            <li style={{ display: "inline-block", fontSize: "18px", fontWeight: 500, lineHeight: "1", marginRight: "1rem", cursor: "pointer" }}><span className="profile-stat-count" style={{ fontWeight: 700 }}>188</span> followers</li>
                            <li style={{ display: "inline-block", fontSize: "18px", fontWeight: 500, lineHeight: "1", marginRight: "1rem", cursor: "pointer" }}><span className="profile-stat-count" style={{ fontWeight: 700 }}>206</span> following</li>
                        </ul>

                    </div>

                    <div className="profile-bio">

                        <p style={{ margin: "0 20px" }}><span className="profile-real-name" style={{ fontWeight: 700 }}>Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

                    </div>
                </div>
            </Profile>

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