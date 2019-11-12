import React from 'react';
// import Banner from 'components/Banners/Banner';
import ListBanner from 'components/Banners/ListBanner';
// import { SectionBreak, Ul } from 'components/SharedStyles/styles';
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
      {/* <Banner>
        <SectionBreak>
          <h4>Skill Insight:</h4>
        </SectionBreak>
        <SectionBreak>
          <p>
            I have been primarily a back end developer for the majority of my
            currier. With some front end projects here and there. I have spent
            the last year and a half on my own time and money to make myself
            into a Full stack developer. Utilizing the SERN stack.
            <Ul>
              <li>SQL Server</li>
              <li>Express js</li>
              <li>React</li>
              <li>Node js</li>
            </Ul>
          </p>
          <p>
            In my job at Hyland I worked primarily with the language called 4D.
            Along with Python maintenance, Bash Scripting, and Postgresql. The
            main point when choosing which language to use came down to this.
            Which language best solves our problems.
          </p>
        </SectionBreak>
      </Banner> */}

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
