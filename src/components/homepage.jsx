import React, { useState } from "react";

const HomePage = () => {

    return(
        <div>
            <h1 className="headline">Welcome to my webpage! | An experiment to document my photography</h1>
            <img className="home_photo" src="./src/assets/homepage_background.jpg"></img>
            <h2 className="connect_banner">Connect with me!</h2>
            <div className="connect_container">
                <a href="https://www.instagram.com/thepurdster98/?hl=en">
                    <img className="connect_logo" src="./src/assets/insta_logo.png"></img>
                </a>
                <a href="https://www.linkedin.com/in/daniel-purdy/">
                    <img className="connect_logo" src="./src/assets/linkedin_logo.png"></img>
                </a>
            </div>
        </div>
    )
}

export default HomePage;