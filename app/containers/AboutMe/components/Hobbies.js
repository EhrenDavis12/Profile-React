// import PropTypes from 'prop-types';
import React from 'react';
import Banner from 'components/Banners/Banner';
import { P } from './styles';

function Hobbies() {
  return (
    <P>
      <Banner>
        <ul>
          <li>Programming - Go to work and program, Go home and program</li>
          <li>Dancing - West Coast Swing - any change I get</li>
          <li>Hiking - A good way to clear your mind and find your ground</li>
          <li>Billiards - Used to be on a team not any more</li>
          <li>Ultimate Frisbee - saturday pick up games</li>
          <li>ATV Riding</li>
        </ul>
      </Banner>
    </P>
  );
}

export default Hobbies;
