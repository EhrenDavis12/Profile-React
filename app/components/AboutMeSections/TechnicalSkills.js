import React from 'react';
import ListBanner from 'components/Banners/ListBanner';
import Languages from 'components/Professional/Lists/Languages';
import Frameworks from 'components/Professional/Lists/Frameworks';
import Databases from 'components/Professional/Lists/Databases';
import Processes from 'components/Professional/Lists/Processes';
import Tools from 'components/Professional/Lists/Tools';
import SystemArchitecture from 'components/Professional/Lists/SystemArchitecture';

// const BGIcon = require('images/BGIcon.png');

function TechnicalSkills() {
  return (
    <div className="container">
      <ListBanner title="Languages" list={Languages} />
      <ListBanner title="Frameworks" list={Frameworks} />
      <ListBanner title="Databases" list={Databases} />
      <ListBanner title="Processes" list={Processes} />
      <ListBanner title="Tools" list={Tools} />
      <ListBanner title="System Architecture" list={SystemArchitecture} />
    </div>
  );
}

export default TechnicalSkills;
