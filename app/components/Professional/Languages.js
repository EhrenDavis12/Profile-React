import React from 'react';
import { SectionBreak, Ul } from 'components/SharedStyles/styles';
import Languages from './Lists/Languages';

function TechnicalSkills() {
  const languages = Languages.map(skill => <li key={skill}>{skill}</li>);
  return (
    <div>
      <SectionBreak>
        <h4>Languages:</h4>
      </SectionBreak>
      <SectionBreak>
        <Ul>{languages}</Ul>
      </SectionBreak>
    </div>
  );
}

export default TechnicalSkills;
