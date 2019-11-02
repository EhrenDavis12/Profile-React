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
import Banner from 'components/Banners/Banner';
import Header from 'components/Banners/Header';
// import ProfessionalIntro from 'components/ProfessionalIntro';
import Portfolio from 'components/AboutMeSections/Portfolio';
import Hobbies from 'components/AboutMeSections/Hobbies';
import ProfessionalExperience from 'components/AboutMeSections/ProfessionalExperience';
import TechnicalSkills from 'components/AboutMeSections/TechnicalSkills';

/* eslint-disable react/prefer-stateless-function */
export default class AboutMePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Banner className="row col-lg-12">
          <div id="Portfolio">
            <Header>Self Project Portfolio</Header>
          </div>
        </Banner>
        <Portfolio />

        <Banner className="row col-lg-12">
          <div id="Hobbies">
            <Header>Hobbies</Header>
          </div>
        </Banner>
        <Hobbies />

        <Banner className="row col-lg-12">
          <div id="TechnicalSkills">
            <Header>Technical Skills</Header>
          </div>
        </Banner>
        <TechnicalSkills />

        <Banner className="row col-lg-12">
          <div id="ProfessionalExperience">
            <Header>Professional Experience</Header>
          </div>
        </Banner>
        <ProfessionalExperience />
      </React.Fragment>
    );
  }
}
