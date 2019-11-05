// import PropTypes from 'prop-types';
import React from 'react';
import Banner from 'components/Banners/Banner';
import { P } from 'components/SharedStyles/styles';

function Education() {
  return (
    <div className="container">
      <Banner>
        <h4>Continuing Education</h4>
        <P>PRESENT</P>
        <P>Utilizing Pluralsight Online Classes</P>
        <P>
          Continuing education to maintain up to date knowledge on new
          languages, trends, and skills
        </P>
      </Banner>

      <Banner>
        <h4>Full Stack Web Development Certificate</h4>
        <P>JANUARY ,2019</P>
        <P>University of Arizona</P>
      </Banner>

      <Banner>
        <h4>Bachelor of Science in Game & Simulation Development</h4>
        <P>JUNE ,2009</P>
        <P>Devry University</P>
      </Banner>
    </div>
  );
}

export default Education;
