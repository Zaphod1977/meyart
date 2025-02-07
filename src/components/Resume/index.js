// Resume/index.js
import React from 'react';
import PhotoCarousel from '../PhotoCarousel'; // Adjust path if needed
import './Resume.css'; // Import the new CSS file

const Resume = () => {
  return (
    <section id="work" className="work">
      {/* Left Side */}
      <div className="work-leftside">
        <h2></h2>
      </div>

      {/* Right Side */}
      <div className="work-rightside">
        <h1>photography</h1>
        <div className="carousel-container">
          <PhotoCarousel />
        </div>
      </div>
    </section>
  );
};

export default Resume;
