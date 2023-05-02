import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from "styled-components";




const Landing = (props) => {


    return (
        <>
        <div className="container d-flex flex-column align-items-center">
            <div>
              <h1 style={{textAlign: "center"}}>Welcome to</h1>
              <img className='m-0 p-0' src='../../assets/munchLogo.png' alt='Munch Logo'></img>
            </div>
        </div>

        <div className="container flex-column align-items-center ">
            <div style={{textAlign: "center", marginTop: "75px"}}>
                <h3>We empower restaurants to build</h3>
                <h3>lasting customers by establishing</h3>
                <h3>community online</h3>
            </div>
        </div>

        <div className="container flex-column align-items-center ">
            <div style={{textAlign: "center", marginTop: "350px"}}>
                <h3>Scroll to find out more</h3>
                <KeyboardArrowDownIcon htmlColor="#000000" />
            </div>
        </div>

        <div className="container flex-column align-items-center ">
            <div style={{marginTop: "100px"}}>
                <h3 style={{fontWeight: "600"}}>How it works</h3>
                <p>Munch Leverages Meta's Instragram Graph API, a tool that allows sites
                    to post directly to Instagram, so that <strong>restaurants in Seattle's University District </strong>
                can share content to a <strong>community Instagram page.</strong>
                </p>
                <img src="../../assets/munchInstagramLogo.png" alt="Landing 1"></img>
            </div>
        </div>

        <div className="container flex-column align-items-center ">
            <div style={{marginTop: "100px", textAlign: "right"}}>
                <h3 style={{fontWeight: "600"}}>Why Munch?</h3>
                <p>
                    We met with restaurant owners and found that a common struggle is <strong>customer retention. </strong> 
                    Social media is an <strong>essential marketing tool,</strong> but it is often difficult to create 
                    and maintain an online business presence. Munch is an easy-to-use platform that 
                    <strong> reduces the stress</strong> of running a social media account. By integrating posts from many restaurants, 
                    our Instagram page has an endless stream of interesting content that will be accessible for generations of 
                    potential customers.
                </p>
            </div>
        </div>

        <div className="container flex-column align-items-center ">
            <div style={{textAlign: "center", marginTop: "75px"}}>
                <p>
                    Visit @munchrestaurants on Instagram to see what the community is saying
                </p>
            </div>
        </div>

        <div className="container flex-column align-items-center ">
            <div style={{textAlign: "center", marginTop: "250px"}}>
                <h3 style={{fontWeight: "600"}}>Meet the Creators</h3>
                <p>
                    Munch was founded by a team of undergraduate students at the University of Washington’s iSchool. 
                    Over the course of 20 weeks, we researched, designed, and developed our the Munch 
                    web app alongside restaurant owners and managers in the University District.
                </p>
            </div>
        </div>

        <div className="container flex-column align-items-center ">
            <div className="row" style={{marginTop: "100px", textAlign:"center"}}>
                <div className="column">
                    <img src="../../assets/team2.png" alt="team 2"></img>
                </div>
                <div className="column">
                    <img src="../../assets/team1.png" alt="team 1"></img>
                </div>
                <div className="column">
                    <img src="../../assets/team3.png" alt="team 3"></img>
                </div>
            </div>
            <div className="row" style={{marginTop: "100px", textAlign: "center"}}>
                <div className="column">
                    <img src="../../assets/team4.png" alt="team 4"></img>
                </div>
                <div className="column">
                    <img src="../../assets/team5.png" alt="team 5"></img>
                </div>
            </div>
        </div>

        <div className="container flex-column align-items-center ">
            <div style={{textAlign: "center", marginTop: "400px"}}>
                <p>
                    Visit @munchrestaurants on Instagram to see what the community is saying
                </p>
            </div>
        </div>
        </>
    )
}

export default Landing;