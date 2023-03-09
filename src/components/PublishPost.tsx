import Navbar from "./Navbar";
import React, { useState } from "react";


const PublishPost = (props) => {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState('');
    const isLoggedIn = props.isLoggedIn;

    const handleOnSubmit = async () => {
        const params = {
            imageUrl: image,
            caption: caption
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
                    <input type="file" accept="image/*" onchange="loadFile(event)">
<img id="output"/>
<script>
  var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
</script>               </input> </div>
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