import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoCarousel = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const imageBasePath = "/assets/photography/";
    const maxImages = 14; // Set an upper limit to prevent infinite loops
    const validPhotos = [];

    const checkImages = async () => {
      for (let i = 1; i <= maxImages; i++) {
        const imgPath = `${imageBasePath}image${i}.jpg`;
        try {
          const response = await fetch(imgPath, { method: "HEAD" });
          if (response.ok) {
            validPhotos.push({ src: imgPath, title: `Image ${i}` });
          } else {
            break; // Stop checking once we find a missing image
          }
        } catch (error) {
          console.error("Error checking image:", imgPath, error);
          break;
        }
      }
      setPhotos(validPhotos);
    };

    checkImages();
  }, []);

  const settings = {
    dots: true,
    infinite: false, // Prevent looping beyond available images
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

export default PhotoCarousel;
