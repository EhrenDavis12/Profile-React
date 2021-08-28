import React from 'react';
import Banner from 'components/Banners/Banner';
import AttainiaExperience from 'components/Professional/AttainiaExperience';
import HylandExperience from 'components/Professional/HylandExperience';
import CadtelExperience from 'components/Professional/CadtelExperience';

// const BGIcon = require('images/BGIcon.png');

function ProfessionalExperience() {
  return (
    <div className="container">
      <Banner>
        <AttainiaExperience />
      </Banner>

      <Banner>
        <HylandExperience />
      </Banner>

      <Banner>
        <CadtelExperience />
      </Banner>
    </div>
  );
}

export default ProfessionalExperience;
