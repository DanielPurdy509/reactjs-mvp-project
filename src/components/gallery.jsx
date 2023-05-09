import React, { useState, useEffect } from "react";
import "./styles.css";
import PhotoCard from "./photocard.jsx";

function Gallery() {
  return (
    <>
        <h1 className="headline">PORTFOLIO | Enjoy some of my latest photos</h1>
        <div className="gallery_canvas">
        <PhotoCard />
        </div>
    </>
  );
}


    // const photoCards = photos.map((photo) => {
    //     <div className="card" key={photo.id}>
    //         <img className="card_front" src={photo.image_src}></img>
    //         <div className="card_back">
    //             <h1 className="photo_date">{photo.photo_date}</h1>
    //             <p className="photo_description">{photo.description}</p>
    //         </div>
    //     </div>
    // })

//     return (
//         <div>
//             <h1 className="headline">PORTFOLIO | Enjoy some of my latest photos</h1>
//         </div>
//     )
// }

export default Gallery;