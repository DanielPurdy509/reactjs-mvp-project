import React, { useState } from "react";
import "./styles.css";

const About = () => {

    return (
        <div className="about_page">
            <h1 className="headline">ABOUT</h1>
            <div className="word_block">
                <h2>This page is a Work in Progress</h2>
                <p>
                    I wanted to create a space to store my photography from my journies while also practicing my web development skills. This webpage was created using React for the Front End and Express for the Back End server.
                </p>
                <p>
                    This is intentended to be an ongoing project. More features and functionality will be incorporated over time. Feel free to let me know what you think and where I can improve!
                </p>
            </div>
                <img src="src/assets/react.svg" className="react_logo"></img>
        </div>
    )
}

export default About;