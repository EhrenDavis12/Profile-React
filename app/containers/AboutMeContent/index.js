/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

// import BkgImg from 'images/background-calm-clouds.jpg';
import BkgImg2 from 'images/nature-milky-way-galaxy-space.jpg';
import BkgImg3 from 'images/nature-milky-way-stars-galaxy.jpg';
import BkgImg4 from 'images/rocksWithNightSky.jpg';
import BkgImg5 from 'images/blue_milky_way.jpg';
import BkgImg6 from 'images/small_bluePur_sky.jpg';

import ParallaxBanner from 'components/Banners/ParallaxBanner';
// import Header from 'components/Banners/Header';
import Portfolio from 'components/AboutMeSections/Portfolio';
import Hobbies from 'components/AboutMeSections/Hobbies';
import ProfessionalExperience from 'components/AboutMeSections/ProfessionalExperience';
import TechnicalSkills from 'components/AboutMeSections/TechnicalSkills';
import Education from 'components/AboutMeSections/Education';

/* eslint-disable react/prefer-stateless-function */
export default class AboutMePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <ParallaxBanner
          image={BkgImg5}
          id="Portfolio"
          header="Self Project Portfolio"
          strength={800}
        >
          <Portfolio />
        </ParallaxBanner>

        <ParallaxBanner
          image={BkgImg4}
          id="TechnicalSkills"
          header="TechnicalSkills"
          strength={1000}
        >
          <TechnicalSkills />
        </ParallaxBanner>

        <ParallaxBanner
          image={BkgImg6}
          id="Hobbies"
          header="Hobbies"
          strength={1000}
        >
          <Hobbies />
        </ParallaxBanner>

        <ParallaxBanner
          image={BkgImg3}
          id="ProfessionalExperience"
          header="ProfessionalExperience"
          strength={800}
        >
          <ProfessionalExperience />
        </ParallaxBanner>

        <ParallaxBanner
          image={BkgImg2}
          id="Education"
          header="Education"
          strength={1000}
        >
          <Education />
        </ParallaxBanner>
      </React.Fragment>
    );
  }
}
