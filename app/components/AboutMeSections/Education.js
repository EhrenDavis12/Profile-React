// import PropTypes from 'prop-types';
import React from 'react';
import Banner from 'components/Banners/Banner';
import { P } from 'components/SharedStyles/styles';

function Education() {
  return (
    <div className="container">
      <Banner>
        <h4>Continuing Education</h4>
        <P>JANUARY, 2019 - PRESENT</P>
        <P>Utilizing Pluralsight Online Classes</P>
        <P>
          Continuing education to maintain up to date knowledge on new
          languages, trends, and skills
        </P>
      </Banner>

      <Banner>
        <h4>Private Executive Leadership Coaching</h4>
        <P>July, 2022 - PRESENT</P>
        <P>Private Leadership coaching taken biweekly</P>
      </Banner>

      <Banner>
        <h4>Private Dance Lessons (WCS)</h4>
        <P>August, 2017 - PRESENT</P>
        <P>Private West Coast Swing Dance lessons taken weekly</P>
      </Banner>

      <Banner>
        <h4>Full Stack Web Development Certificate</h4>
        <P>JANUARY, 2019</P>
        <P>University of Arizona</P>
      </Banner>

      <Banner>
        <h4>Bachelor of Science in Game & Simulation Development</h4>
        <P>JUNE 2008 - JUNE 2011</P>
        <P>Devry University</P>
      </Banner>
    </div>
  );
}

export default Education;
