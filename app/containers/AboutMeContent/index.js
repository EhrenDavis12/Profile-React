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

import BkgImg from 'images/BkgBanners/cloudyWater.jpg';
import BkgImg2 from 'images/BkgBanners/nature-milky-way-galaxy-space.jpg';
import BkgImg3 from 'images/BkgBanners/nature-milky-way-stars-galaxy.jpg';
import BkgImg4 from 'images/BkgBanners/rocksWithNightSky.jpg';
import BkgImg5 from 'images/BkgBanners/blue_milky_way.jpg';
import BkgImg6 from 'images/BkgBanners/small_bluePur_sky.jpg';

import ParallaxBanner from 'components/Banners/ParallaxBanner';
// import Header from 'components/Banners/Header';
import Portfolio from 'components/AboutMeSections/Portfolio';
import Hobbies from 'components/AboutMeSections/Hobbies';
import ProfessionalExperience from 'components/AboutMeSections/ProfessionalExperience';
import TechnicalSkills from 'components/AboutMeSections/TechnicalSkills';
import Education from 'components/AboutMeSections/Education';
import Books from 'components/AboutMeSections/Books';

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
          header="Technical Skills"
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
          header="Professional Experience"
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

        <ParallaxBanner
          image={BkgImg}
          id="Books"
          header="Books Inspiring for Leadership"
          strength={1000}
        >
          <Books />
        </ParallaxBanner>
      </React.Fragment>
    );
  }
}
