import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArtCarousel = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const imageBasePath = "/assets/art/";
    const maxImages = 2;
    const validPhotos = [];

    const checkImages = async () => {
      for (let i = 1; i <= maxImages; i++) {
        const imgPath = `${imageBasePath}image${i}.jpg`;
        try {
          const response = await fetch(imgPath, { method: "HEAD" });
          if (response.ok) {
            validPhotos.push({ src: imgPath, title: `Image ${i}` });
          } else {
            break;
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
    infinite: photos.length > 3, // Only enable infinite loop if there are enough images
    speed: 500,
    centerMode: true,
    slidesToShow: Math.min(3, photos.length), // Prevents more slides than available images
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: Math.min(1, photos.length) }
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
