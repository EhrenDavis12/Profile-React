import React from 'react';
import { P, SectionBreak, Img } from 'components/SharedStyles/styles';

const BGIcon = require('images/BGIcon.png');

function BootCampTeamFinal() {
  return (
    <div>
      <SectionBreak>
        <h4>Broken Glass</h4>
        <P>Final Team Project for Full Stack Web Dev Certification</P>
        <P>
          This project is a play off glass door. Where glass door evaluates
          corporate businesses as a whole to rate them. Here we want to do the
          same, however on a level down to the individual places. One franchise
          store does not operate on the same level as another. We want to catch
          that difference and inform future employees.
        </P>
      </SectionBreak>
      <div className="row">
        <div className="col-md-7">
          <SectionBreak>
            <P>Duration 1 month</P>
            <P>
              For this project we found and used this{' '}
              <a href="https://github.com/react-boilerplate/react-boilerplate">
                react-boilerplate
              </a>{' '}
              to initiate the project.
            </P>
            <P>
              <a href="https://broken-glass-app.herokuapp.com/">
                Broken Glass web site
              </a>
            </P>
            <P>
              <a href="https://github.com/EhrenDavis12/broken-glass-app">
                Front End GetHub Repository
              </a>
            </P>
            <P>
              <a href="https://github.com/EhrenDavis12/broken-glass-api">
                Back End GetHub Repository
              </a>
            </P>
          </SectionBreak>
          <P>
            On this project I worked on:
            <ul>
              <li>Auth0 integration</li>
              <li>Google Maps integration</li>
              <li>Deployment using Heroku</li>
              <li>
                Setting up the environment up connections between app and api
              </li>
            </ul>
          </P>
        </div>
        <div className="col-md-5">
          <Img src={BGIcon} alt="BrokenGlassIcon" />
        </div>
      </div>
    </div>
  );
}

export default BootCampTeamFinal;
