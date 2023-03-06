import { ACCOUNT_ALREADY_REGISTERED_STATUS, HOME_ROUTE, SUCCESS, TRY_AGAIN_LATER_MSG } from "constant/CommonConstants";
import React, {useState } from "react";
import Navbar from "./Navbar";
import { StatusModal } from "./StatusModal";
import { useNavigate } from "react-router-dom";
import { loginAccount } from "util/apiUtil";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showStatus, setShowStatus] = useState(false);
    const [statusModalTitle, setStatusModalTItle] = useState("");
    const [statusModalDescription, setStatusModalDescription] = useState("");
    const setIsLoggedIn = props.setIsLoggedIn;
    const setAccountInfo = props.setAccountInfo;
    const navigate = useNavigate();

    const handleOnSubmit = async () => {
        const params = {
          email: email,
          password: password
        }
        const resp = await loginAccount(params);

        if (!resp.status) {
          setIsLoggedIn(true);
          setAccountInfo(resp);
          navigate(HOME_ROUTE);
        } else {
          setStatusModalTItle("Error Logging in");
          setStatusModalDescription(TRY_AGAIN_LATER_MSG);
          setShowStatus(true);
        }
      }

    return (
        <div>
            <Navbar />
            <h2 className="text-center">Log into Your Account!</h2>
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
                <div className="form align-items-center">
                    <div className="form-group col-md-4">
                        <label htmlFor = "exampleInputEmail1">Email address *</label>
                        <input type="email" className="form-control " onChange={(e) => setEmail(e.target.value)} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "exampleInputPassword1">Password *</label>
                        <input type="password" className="form-control " value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" aria-describedby="passwordHelp" placeholder="Enter Password"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;