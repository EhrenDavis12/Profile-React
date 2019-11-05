import React from 'react';
import Banner from 'components/Banners/Banner';
// import { PLeft } from 'components/SharedStyles/styles';
import Languages from 'components/Professional/Languages';

// const BGIcon = require('images/BGIcon.png');

function TechnicalSkills() {
  return (
    <div className="container">
      <Banner>
        <Languages />
      </Banner>
    </div>
  );
}

export default TechnicalSkills;
