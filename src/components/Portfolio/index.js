import React from 'react';
import ArtCarousel from '../ArtCarousel'; // Adjust path if needed
import '../Resume/Resume.css'; // Import the new CSS file


function Portfolio(props) {
  return (
    <section id="work" className="work">
      {/* Left Side */}
      <div className="work-leftside">
        <h2>MAK'r</h2>
      </div>

      {/* Right Side */}
      <div className="work-rightside">
        <h1></h1>
        <div className="carousel-container">
          <ArtCarousel />
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
