// import PropTypes from 'prop-types';
import React from 'react';
// import HeaderBar from 'components/HeaderBar';
import { H2, Row12, PLeft } from './styles';

function ProfessionalIntro() {
  return (
    <div className="row">
      <Row12>
        <H2>Professional Intro</H2>
      </Row12>
      <Row12>
        <PLeft>
          This Repository is the android application that I made in 3 weeks.
          <br />
          <a href="https://github.com/EhrenDavis12/DesertCodeCamp">
            GetHub Repository
          </a>
          <br />
          <a href="https://play.google.com/store/apps/details?id=com.ehrendavis.desertcodecampscheduler">
            App Deployed in Google Play Store
          </a>
          <br />
          <br />
          Boot camp Final Team project: Duration 1 month
          <br />
          <a href="https://broken-glass-app.herokuapp.com/">Go To Web Site</a>
          <br />
          <a href="https://github.com/EhrenDavis12/broken-glass-app">
            Front End GetHub Repository
          </a>
          <br />
          <a href="https://github.com/EhrenDavis12/broken-glass-api">
            Back End GetHub Repository
          </a>
          <br />
          On this project I worked on:
          <ul>
            <li>Auth0 integration.</li>
            <li>Google Maps integration</li>
            <li>Deployment using Heroku</li>
            <li>
              Setting up the environment up connections between app and api.
            </li>
          </ul>
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
        </PLeft>
      </Row12>
    </div>
  );
}

export default ProfessionalIntro;
