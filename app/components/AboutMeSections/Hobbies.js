// import PropTypes from 'prop-types';
import React from 'react';
import Banner from 'components/Banners/Banner';
// import { P } from 'components/SharedStyles/styles';

function Hobbies() {
  return (
    <div className="container">
      <Banner>
        <ul>
          <li>Programming - Go to work and program, Go home and program</li>
          <li>Dancing - West Coast Swing - any chance I get</li>
          <li>Hiking - A good way to clear your mind and find your ground</li>
          <li>
            Billiards - Was in a league and casually shooting with friends
          </li>
          <li>Ultimate Frisbee - Saturday pick up games</li>
          <li>ATV Riding - Off road here I!</li>
        </ul>
      </Banner>
    </div>
  );
}

export default Hobbies;
