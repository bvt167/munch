import React from "react";
import Navbar from "./Navbar";

const Login = () => {

    return (
        <div>
            <Navbar />
            <form>
                <h2 className="text-center">Log into Your Account!</h2>
                <div className="form align-items-center">
                    <div className="form-group col-md-4">
                        <label htmlFor = "exampleInputEmail1">Email address *</label>
                        <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "exampleInputPassword1">Password *</label>
                        <input type="password" className="form-control " id="exampleInputPassword1" aria-describedby="passwordHelp" placeholder="Enter Password"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        </div>
    );
};

export default Login;