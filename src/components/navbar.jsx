import React, { useState } from "react";
import { useEffect } from "react";
import "./styles.css";

const NavBar = (props) => {

    const [currentPage,setCurrentPage] = useState("home");
    props.setLoggedPage(currentPage);

    // useEffect(() => {
    //     console.log('Updated state:', currentPage);
    // }, [currentPage]);

    function galleryClicked () {
        setCurrentPage("gallery")
        props.setLoggedPage(currentPage)
        // console.log(`${currentPage} is selected`)
    }

    function homeClicked () {
        setCurrentPage("home")
        // console.log(`${currentPage} is selected`)
    }

    function aboutClicked () {
        setCurrentPage("about")
    }

    return(
        <div className="navbar">
            <img className="page_logo" src="./src/assets/page_logo.png"></img>
            <p className="page_name">My Photos</p>
            <button onClick={aboutClicked} className="nav_button">About</button>
            <button onClick={galleryClicked} className="nav_button">Gallery</button>
            <button onClick={homeClicked} className="nav_button">Home</button>
        </div>
    )
}

export default NavBar;