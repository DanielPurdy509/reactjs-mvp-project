import React, { useState } from "react";
import "./styles.css";
import HomePage from "./homepage.jsx";
import Gallery from "./gallery.jsx";
import About from "./about.jsx";

const DisplayArea = (props) => {

    return (
        <div className="display_area">
            {props.loggedPage == "home" ? <HomePage /> : <></>}
            {props.loggedPage == "gallery" ? <Gallery /> : <></>}
            {props.loggedPage == "about" ? <About /> : <></>} 
        </div>
    )
}

export default DisplayArea;