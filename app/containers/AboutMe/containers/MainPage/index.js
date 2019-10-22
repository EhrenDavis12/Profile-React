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

// import ContactMePage from 'containers/ContactMe/container/Loadable';

import Banner from '../../components/Banner';
import ProfessionalIntro from '../../components/ProfessionalIntro';
import Hobbies from '../../components/Hobbies';

/* eslint-disable react/prefer-stateless-function */
export default class AboutMePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Banner className="row col-lg-12">
          <div id="ProfessionalIntro">
            <ProfessionalIntro />
          </div>
        </Banner>

        <Banner className="row col-lg-12">
          <div id="Hobbies">
            <Hobbies />
          </div>
        </Banner>

        {/* <Banner className="row col-lg-12">
          <div id="ContactMePage">
            <ContactMePage />
          </div>
        </Banner> */}
      </React.Fragment>
    );
  }
}
