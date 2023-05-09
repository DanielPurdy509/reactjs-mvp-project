import React, { useState } from "react";
import "./styles.css";

const NavBar = () => {

    return(
        <div className="navbar">
            <img className="page_logo" src="./src/assets/page_logo.png"></img>
            <p className="page_name">My Photos</p>
            <button className="nav_button">About</button>
            <button className="nav_button">Gallery</button>
            <button className="nav_button">Home</button>
        </div>
    )
}

export default NavBar;