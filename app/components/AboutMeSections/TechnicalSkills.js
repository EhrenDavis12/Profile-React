import React from 'react';
import Banner from 'components/Banners/Banner';
import { PLeft } from 'components/SharedStyles/styles';
import Languages from 'components/Professional/Languages';

// const BGIcon = require('images/BGIcon.png');

function TechnicalSkills() {
  return (
    <PLeft>
      <Banner>
        <Languages />
      </Banner>
    </PLeft>
  );
}

export default TechnicalSkills;
