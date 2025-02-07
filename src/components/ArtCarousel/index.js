import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArtCarousel = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("/assets/art/index.json")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error("Error loading images:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="carousel-slide">
            <a href={photo.src} target="_blank" rel="noopener noreferrer">
              <img
                src={photo.src}
                alt={photo.title}
                style={{
                  width: "250px",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  margin: "0 15px"
                }}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArtCarousel;
