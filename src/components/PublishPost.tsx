import Navbar from "./Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { publishPost } from "util/apiUtil";


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
        const resp = await publishPost(params)
        if(!isLoggedIn) {
            navigate("/login"); 
        } else {
            setIsLoggedIn(true);
        }
    }

    return (
        <div>
            <Navbar />
            <div className="text-center">
                <p>Make a Post by adding your image of choice</p>
                <p>and add your caption, we will do the rest!</p>
            </div>
            <form onSubmit={handleOnSubmit}>
                <div className="form-group col-md-4 col-md-offset-2 ">
                    <label htmlFor="formFileMultiple" className="form-label">Upload Image(s)</label>
                    <input className="form-control" onChange={(e) => setImage(e.target.value)} value={image} type="file" id="formFileMultiple" multiple accept="image/png, image/gif, image/jpeg"/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor = "inputCaption">Caption *</label>
                    <input type="caption" className="form-control " onChange={(e) => setCaption(e.target.value)} value={caption} id="inputCaption" aria-describedby="captionHelp" placeholder="Enter your caption"/>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Publish Post</button>
                </div>
            </form>
        </div>
    );
};

export default PublishPost;