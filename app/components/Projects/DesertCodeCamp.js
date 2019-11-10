import React from 'react';
import { P, Div, SectionBreak, Img } from 'components/SharedStyles/styles';

const DesertCodeCampIcon = require('images/DesertCodeCampIcon.png');

function DesertCodeCamp() {
  return (
    <div>
      <SectionBreak>
        <h4>Desert Code Camp Scheduler</h4>
        <P>
          React Native project Created for the purpose of favoring and
          scheduling sessions at the code camp.
        </P>
        <P>
          Desert Code Camp is a free 1 day event in Phoenix Arizona. This is a
          conference targeting the development community to inspire and educated
          at all levels.
        </P>
        <P>
          This project was the front end app for android phones. The Backend API
          already existed and published by the conference proprietor.
        </P>
      </SectionBreak>

      <div className="row">
        <div className="col-md-7">
          <Div>
            <div>Duration:</div>
            <ul>
              <li>One Week to learn React Native</li>
              <li>Three Weeks to program the project</li>
              <li>One Week for deployment to google play store</li>
              <li>No further updates will be made to this project</li>
            </ul>
          </Div>
          <Div>
            <div>
              You may see the code at the{' '}
              <a href="https://github.com/EhrenDavis12/DesertCodeCamp">
                GetHub Repository
              </a>
            </div>
            <div>
              You may download the project in the{' '}
              <a href="https://play.google.com/store/apps/details?id=com.ehrendavis.desertcodecampscheduler">
                Google Play Store
              </a>
            </div>
          </Div>
        </div>
        <div className="col-md-5 text-center">
          <Img src={DesertCodeCampIcon} alt="desertCodeCampIcon" />
        </div>
      </div>
    </div>
  );
}

export default DesertCodeCamp;
