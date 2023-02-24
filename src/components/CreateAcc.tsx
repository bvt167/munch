import React from "react";
import Navbar from "./Navbar";


const CreateAcc = () => {

    return (
        <div>
            <Navbar />
            <form>
                <h2 className="text-center">Create an account to start posting!</h2>
                <div className="form-row align-items-center">
                    <div className="form-group col-md-4">
                        <label htmlFor = "exampleInputEmail1">Email address *</label>
                        <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "exampleInputFirstName">First Name *</label>
                        <input type="firstname" className="form-control " id="exampleInputFirstName" aria-describedby="firstHelp" placeholder="Enter First Name"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "exampleInputLastName">Last Name *</label>
                        <input type="lastname" className="form-control " id="exampleInputLastName" aria-describedby="lastHelp" placeholder="Enter Last Name"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "exampleInputPassword1">Password *</label>
                        <input type="password" className="form-control " id="exampleInputPassword1" aria-describedby="passwordHelp" placeholder="Enter Password"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "exampleInputPassword2">Re-enter Password *</label>
                        <input type="password" className="form-control " id="exampleInputPassword2" aria-describedby="passwordHelp" placeholder="Re-enter Password"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "exampleInputRestaurantName">Restaurant Name *</label>
                        <input type="restaurantname" className="form-control " id="exampleInputRestaurantName" aria-describedby="restaurantHelp" placeholder="Enter Restaurant Name"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "exampleInputRestaurantAddress">Restaurant Address</label>
                        <input type="address" className="form-control " id="exampleInputRestaurantAddress" aria-describedby="addressHelp" placeholder="Enter Restaurant Address"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor = "exampleInputJobTitle">Job Title</label>
                        <input type="jobtitle" className="form-control " id="exampleInputJobTitle" aria-describedby="jobtitleHelp" placeholder="What is your Job Title"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        </div>
    );
};

export default CreateAcc;