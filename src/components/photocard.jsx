import React, { useState, useEffect } from "react";
import "./styles.css";


function PhotoCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log(data);

  return (
    <>
    {data.map((photo) => (
        <div className="card_container">
            <div className="card" key={photo.id}>
                <div className="card_front">
                    <img className="photo_image" src={photo.image_src}></img>
                </div>
                <div className="card_back">
                    <h1 className="photo_location">{photo.location}</h1>
                    <h2 className="photo_date">{photo.photo_date}</h2>
                    <p className="photo_description">{photo.description}</p>
                </div>
            </div>
        </div>
    ))}
    </>
  );
}

export default PhotoCard;