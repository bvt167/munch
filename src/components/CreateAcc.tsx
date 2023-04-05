import { ACCOUNT_ALREADY_REGISTERED_STATUS, HOME_ROUTE, SUCCESS, TRY_AGAIN_LATER_MSG } from "constant/CommonConstants";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAccount } from "util/apiUtil";
import Navbar from "./Navbar";
import { StatusModal } from "./StatusModal";
import styled from "styled-components";

const CircledContainer = styled.div`
  border-radius: 25px;
  background: #F9E1E1;
  width: 500px;
  height: 700px;  
  padding: 50px 0;
  border: 3px solid gray;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`


const CreateAcc = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [restName, setRestName] = useState('');
    const [restAddress, setRestAddress] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [showStatus, setShowStatus] = useState(false);
    const [statusModalTitle, setStatusModalTItle] = useState("");
    const [statusModalDescription, setStatusModalDescription] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = async () => {
      const params = {
        restaurantName: restName,
        email: email,
        password: password,
        jobTitle: jobTitle,
        address: restAddress
      }

      const resp = await registerAccount(params);
      if (SUCCESS === resp.status) {
        navigate(HOME_ROUTE);
      } else {
        setStatusModalTItle("Error Registering");
        if (ACCOUNT_ALREADY_REGISTERED_STATUS === resp.status) {
          setStatusModalDescription(resp.status);
        } else {
          setStatusModalDescription(TRY_AGAIN_LATER_MSG);
        }
        setShowStatus(true);
      }
    }


    return (
        <div>
            <Navbar />
            <h2 className="text-center">Create an account to start posting!</h2>
            {
              showStatus ?
              <StatusModal
                title={statusModalTitle}
                description={statusModalDescription}
                open={showStatus}
                handleClose={() => setShowStatus(false)}
              /> :
              ""
            }
            <form onSubmit={handleOnSubmit}>
              <CircledContainer>
                <div className="form-row align-items-center">
                    <div className="form-group col-md-4">
                        <label htmlFor = "inputEmail">Email address *</label>
                        <input type="email" className="form-control " onChange={(e) => setEmail(e.target.value)} value={email} id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "inputFirstName">First Name *</label>
                        <input type="firstname" className="form-control " onChange={(e) => setFirstName(e.target.value)} value={firstName} id="inputFirstName" aria-describedby="firstHelp" placeholder="Enter First Name"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "inputLastName">Last Name *</label>
                        <input type="lastname" className="form-control "  onChange={(e) => setLastName(e.target.value)} value={lastName}id="inputLastName" aria-describedby="lastHelp" placeholder="Enter Last Name"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "inputPassword">Password *</label>
                        <input type="password" className="form-control "  onChange={(e) => setPassword(e.target.value)} value={password}id="inputPassword" aria-describedby="passwordHelp" placeholder="Enter Password"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "inputPasswordReEnter">Re-enter Password *</label>
                        <input type="password" className="form-control "  onChange={(e) => setRePassword(e.target.value)} value={rePassword}id="inputPasswordReEnter" aria-describedby="passwordHelp" placeholder="Re-enter Password"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "inputRestaurantName">Restaurant Name *</label>
                        <input type="restaurantname" className="form-control " onChange={(e) => setRestName(e.target.value)} value={restName} id="inputRestaurantName" aria-describedby="restaurantHelp" placeholder="Enter Restaurant Name"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "inputRestaurantAddress">Restaurant Address</label>
                        <input type="address" className="form-control "  onChange={(e) => setRestAddress(e.target.value)} value={restAddress}id="inputRestaurantAddress" aria-describedby="addressHelp" placeholder="Enter Restaurant Address"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "inputJobTitle">Job Title</label>
                        <input type="jobtitle" className="form-control "  onChange={(e) => setJobTitle(e.target.value)} value={jobTitle} id="inputJobTitle" aria-describedby="jobtitleHelp" placeholder="What is your Job Title"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
                </CircledContainer>
            </form>
        </div>
    );
};

export default CreateAcc;