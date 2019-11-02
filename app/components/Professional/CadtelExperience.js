import React from 'react';
import { P, SectionBreak } from 'components/SharedStyles/styles';

// const BGIcon = require('images/BGIcon.png');

function CadtelExperience() {
  return (
    <div>
      <SectionBreak>
        <h4>Data Analyst/Developer</h4>
        <P>MAY 2011 – APRIL 2013</P>
        <P>CADTEL Inc.</P>
      </SectionBreak>
      <SectionBreak>
        <ul>
          <li>
            Managed the upload and conversion of legacy data for our customers
            to the new system
          </li>
          <li>
            Built automated process using a combination of MySQL, VB, C++, C#
            and Bash to manage upload 24/7
          </li>
          <li>
            Architected the “Clean up tool”, that was used to speed up Quality
            Assurance by 85%
          </li>
          <li>
            Developed tools to automate manual processes resulting in a 125%
            productivity increase, while improving
          </li>
          <li>curacy from less than 10% to over 90%</li>
          <li>
            Built and expanded Clean up tool based off changing customer
            requests and user response
          </li>
          <li>Built automated scripts and to improve user efficiency</li>
          <li>Managed and maintained MySQL database</li>
          <li>
            Created, maintained and ran T-SQL queries to ensure data integrity
          </li>
          <li>
            Managed rollout and implementation of upgrades to multiple customers
          </li>
          <li>
            Data mined on long running processes to identify performance hits or
            bottle necks
          </li>
          <li>
            Automated the tracking of data’s state for accurate reporting and
            progress updates
          </li>
        </ul>
      </SectionBreak>
    </div>
  );
}

export default CadtelExperience;
