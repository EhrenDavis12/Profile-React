// import PropTypes from 'prop-types';
import React from 'react';
import Banner from 'components/Banners/Banner';
import { PLeft } from './styles';
import DesertCodeCamp from './Projects/DesertCodeCamp';
import BootCampTeamFinal from './Projects/BootCampTeamFinal';

function ProfessionalIntro() {
  return (
    <div>
      <PLeft>
        <Banner>
          <DesertCodeCamp />
        </Banner>

        <Banner>
          <BootCampTeamFinal />
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
      </PLeft>
    </div>
  );
}

export default ProfessionalIntro;
