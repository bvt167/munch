import Navbar from "./Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { publishPost } from "util/apiUtil";
import styled from "styled-components";
import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Headers from "./Header";

const Header = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
`

const CircledContainer = styled.div`
  border-radius: 25px;
  width: 325px;
  height: 400px;  
  padding: 50px 0;
  border: 3px solid gray;
  text-align: center;
  margin: 0 auto;
`

const Buttons = styled.div`
    margin-top 20px;
    margin-bottom: 30px;
`

const PublishPost = (props) => {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;

    const handleOnSubmit = async () => {
        const params = {
          media: image,
          caption: caption,
          email: "jasonj1@uw.edu",
          password: "asdf"
        }
        await publishPost(params)
        if(!isLoggedIn) {
            navigate("/login");
        } else {
            setIsLoggedIn(true);
        }
    }

    return (
        <div>
            <Headers />
            <div className="container-fluid">
            <IconButton className="bg-black p-1 align-self-start" aria-label="back" onClick={() => navigate("/home")} style={{marginTop: "75px"}}>
                <ArrowBack htmlColor="#FFFFFF" />
            </IconButton>
                <div className="text-center">
                        <h3 style={{marginTop: "50px"}}> Add images from </h3>
                        <h3> your photo library </h3>
                </div>
            </div>
            <CircledContainer className="p-3">
                <form onSubmit={handleOnSubmit} className="d-flex flex-column">
                    <div className="form align-items-center">
                        <div className="form-group col-md-4 col-md-offset-2 ">
                            <label htmlFor="formFileMultiple" className="form-label">Upload Image(s)</label>
                            <input className="form-control" onChange={(e) => setImage(e.target.value)} value={image} type="file" id="formFileMultiple" multiple accept="image/png, image/gif, image/jpeg"/>
                        </div>
                        <Buttons>
                            <div className="form-group col-md-4">
                                <label htmlFor = "inputCaption">Caption *</label>
                                <input type="caption" className="form-control " onChange={(e) => setCaption(e.target.value)} value={caption} id="inputCaption" aria-describedby="captionHelp" placeholder="Enter your caption"/>
                            </div>
                        </Buttons>
                        <div className="text-center">
                            <Buttons>
                                <button type="submit" className="btn btn-primary"onClick={() => navigate("/confirm")} style={{backgroundColor: "black", color: "white"}}>Post to Instagram</button>
                            </Buttons>
                        </div>
                    </div>
                </form>
            </CircledContainer>
            <Navbar />
        </div>
    );
};

export default PublishPost;