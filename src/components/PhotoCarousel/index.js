import React, { useMemo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotoCarousel = () => {
  // useMemo ensures the images are imported only once on component mount
  const photos = useMemo(() => {
    // Helper function to import all images from the folder
    const importAll = (r) =>
      r.keys().map((key) => ({
        src: r(key).default || r(key),
        title: key.replace('./', '').replace(/\.(png|jpe?g|svg)$/i, ''),
      }));
    
    let importedPhotos = [];
    try {
      // IMPORTANT: Verify that the folder name matches exactly.
      // For example, if your folder is "photographs" (plural) under src/assets, the path must be:
      importedPhotos = importAll(require.context('../../assets/photography', false, /\.(png|jpe?g|svg)$/i));
    } catch (error) {
      console.error('Error loading photos:', error);
    }
    console.log('Imported photos:', importedPhotos);
    return importedPhotos;
  }, []);

  // Define your slider settings
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
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      {photos.length === 0 ? (
        <p>No photos found. Check the folder name/path and file extensions.</p>
      ) : (
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index}>
              <img
                src={photo.src}
                alt={photo.title}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default PhotoCarousel;
