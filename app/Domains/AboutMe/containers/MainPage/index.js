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

import ContactMePage from 'Domains/ContactMe/container/Loadable';

import LazyBackGround from '../../components/LazyBackGround';
import Banner from '../../components/Banner';
import ProfessionalIntro from '../../components/ProfessionalIntro';
import Hobbies from '../../components/Hobbies';

/* eslint-disable react/prefer-stateless-function */
export default class AboutMePage extends React.PureComponent {
  render() {
    return (
      <LazyBackGround>
        <Banner className="row col-lg-12">
          <ProfessionalIntro />
        </Banner>

        <Banner className="row col-lg-12">
          <Hobbies />
        </Banner>

        <Banner className="row col-lg-12">
          <ContactMePage />
        </Banner>
      </LazyBackGround>
    );
  }
}
