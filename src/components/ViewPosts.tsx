import Headers from "./Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { publishPost } from "util/apiUtil";
import styled from "styled-components";

const Header = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
`

const CircledContainer = styled.div`
  border-radius: 25px;
  background: #F9E1E1;
  width: 325px;
  height: 400px;  
  padding: 50px 0;
  border: 3px solid gray;
  text-align: center;
  margin: 0 auto;
`

const Button = styled.div`
    margin-top 20px;
    margin-bottom: 30px;
`

const ViewPost = (props) => {
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
        <>
            <Headers />
            <div className="text-center">
                <Header>
                    <h3> Add images from </h3>
                    <h3> your photo library </h3>
                </Header>
            </div>
            <CircledContainer>
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group col-md-4 col-md-offset-2 ">
                        <label htmlFor="formFileMultiple" className="form-label">Upload Image(s)</label>
                        <input className="form-control" onChange={(e) => setImage(e.target.value)} value={image} type="file" id="formFileMultiple" multiple accept="image/png, image/gif, image/jpeg"/>
                    </div>
                    <Button>
                        <div className="form-group col-md-4">
                            <label htmlFor = "inputCaption">Caption *</label>
                            <input type="caption" className="form-control " onChange={(e) => setCaption(e.target.value)} value={caption} id="inputCaption" aria-describedby="captionHelp" placeholder="Enter your caption"/>
                        </div>
                    </Button>
                    <div className="text-center">
                        <Button>
                            <button type="submit" className="btn btn-primary">Publish Post</button>
                        </Button>
                    </div>
                </form>
            </CircledContainer>
        </>
    );
};

export default ViewPost;