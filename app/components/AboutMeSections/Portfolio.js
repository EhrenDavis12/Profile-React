// import PropTypes from 'prop-types';
import React from 'react';
import Banner from 'components/Banners/Banner';
import DesertCodeCamp from 'components/Projects/DesertCodeCamp';
import CodeChallenges from 'components/Projects/CodeChallenges';
import BootCampTeamFinal from 'components/Projects/BootCampTeamFinal';
import PortfolioWebSite from 'components/Projects/PortfolioWebSite';
import MicroServiceSample from 'components/Projects/MicroServiceSample';

function ProfessionalIntro() {
  return (
    <div className="container">
      <Banner>
        <DesertCodeCamp />
      </Banner>

      <Banner>
        <CodeChallenges />
      </Banner>

      <Banner>
        <BootCampTeamFinal />
      </Banner>

      <Banner>
        <PortfolioWebSite />
      </Banner>

      <Banner>
        <MicroServiceSample />
      </Banner>

      {/* <Banner>
          <br />
          This is a project I worked on to learn/refine technologies.
          React-redux(-sagas), jest - and more.
          <br />
          <a href="https://github.com/EhrenDavis12/Profile-React">
            GetHub Repository
          </a>
          <br />
          <a href="https://ehren-davis-profile-app.herokuapp.com/">
            Go To Web Site
          </a>
          <br />
          No content on the web site, it’s the code here that is fun.
          <br />
          <br />
          This is a basic microservice I built for emails and storing messages.
          The code here is fun! I like the way errors are handled with the async
          calls.
          <br />
          <a href="https://github.com/EhrenDavis12/contactMeAPI">
            GetHub Repository
          </a>
          <br />
          <br />
          !!! ITS STAR WARS !!!
          <br />
          <a href="https://ehrendavis12.github.io/RPG_StarWars/">
            Go To Web Site
          </a>
          <br />
          <a href="https://github.com/EhrenDavis12/RPG_StarWars">
            GetHub Repository
          </a>
        </Banner> */}
    </div>
  );
}

export default ProfessionalIntro;
