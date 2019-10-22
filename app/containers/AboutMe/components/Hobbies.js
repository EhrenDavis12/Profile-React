// import PropTypes from 'prop-types';
import React from 'react';
// import HeaderBar from 'components/HeaderBar';
import { P, H2 } from './styles';

function Hobbies() {
  return (
    <div className="row">
      <div className="row col-lg-12">
        <H2>Hobbies</H2>
      </div>
      <div className="row col-lg-12">
        <ul>
          <li>Programming</li>
          <li>Dancing West Coast Swing</li>
          <li>Hiking</li>
          <li>Billiards</li>
          <li>ATV Riding</li>
        </ul>
      </div>
    </div>
  );
}

export default Hobbies;
