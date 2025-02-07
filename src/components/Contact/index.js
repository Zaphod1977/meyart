// Resume/index.js
import React from 'react';
import ArtCarousel from '../ArtCarousel'; // Adjust path if needed
import '../Resume/Resume.css'; // Import the new CSS file

const Contact = () => {
  return (
    <section id="work" className="work">
      {/* Left Side */}
      <div className="work-leftside">
        <h2></h2>
      </div>

      {/* Right Side */}
      <div className="work-rightside">
        <h1>art</h1>
        <div className="carousel-container">
          <ArtCarousel />
        </div>
      </div>
    </section>
  );
};

export default Contact;
