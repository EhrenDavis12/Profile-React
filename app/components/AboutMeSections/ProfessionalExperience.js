import React from 'react';
import Banner from 'components/Banners/Banner';
import AttainiaExperience from 'components/Professional/AttainiaExperience';
import HylandExperience from 'components/Professional/HylandExperience';
import CadtelExperience from 'components/Professional/CadtelExperience';
import AppraisalTekExperience from 'components/Professional/AppraisalTekExperience';

// const BGIcon = require('images/BGIcon.png');

function ProfessionalExperience() {
  return (
    <div className="container">
      <Banner>
        <AppraisalTekExperience />
      </Banner>

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
