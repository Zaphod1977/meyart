import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import horrorScorer from '../../assets/images/horror_scorer_screengrab.PNG'
import movieJuice from '../../assets/images/movieJuice.jpg'
import STL_Happens from '../../assets/images/STL_Happens screenshot.PNG'
import weatherApp from '../../assets/images/weather resize.jpg'
import Project from '../Project';


function Portfolio(props) {
  return (
    <section id="work" className="work">
      <h2 className="work-leftside">(coding) Portfolio</h2>
      <div className="work-rightside">
        <div className="btmw">
          <Project
            linkurl="https://horror-scorer.herokuapp.com/"
            imageSource={horrorScorer}
            imageAlt=""
            label="MERN Demo">
          </Project>
          <Project
            linkurl="https://agile-harbor-58683.herokuapp.com/"
            imageSource={STL_Happens}
            imageAlt="STL_Happens screenshot"
            label="STL Happens">
          </Project>
        </div>
        <div className="btmw">
          <Project
            linkurl="https://zaphod1977.github.io/Weather-Dashboard/"
            imageSource={weatherApp}
            imageAlt="webpage screengrab"
            label="Weather App">
          </Project>
          <Project
            linkurl="https://amymgardiner.github.io/movieJuice/"
            imageSource={movieJuice}
            imageAlt="webpage screengrab"
            label="movieJuice">
          </Project>
        </div>
      </div>
    </section>

  );
}
export default Portfolio;
