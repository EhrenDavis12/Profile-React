import React from 'react';
import Banner from 'components/Banners/Banner';
import { PLeft } from 'components/SharedStyles/styles';
import HylandExperience from 'components/Professional/HylandExperience';
import CadtelExperience from 'components/Professional/CadtelExperience';

// const BGIcon = require('images/BGIcon.png');

function ProfessionalExperience() {
  return (
    <PLeft>
      <Banner>
        <HylandExperience />
      </Banner>

      <Banner>
        <CadtelExperience />
      </Banner>
    </PLeft>
  );
}

export default ProfessionalExperience;
