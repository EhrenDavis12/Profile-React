import React from 'react';
import { P, SectionBreak, Img } from 'components/SharedStyles/styles';

const CodeChallengesIcon = require('images/CodeChallenges.jpg');

function CodeChallenges() {
  return (
    <div>
      <SectionBreak>
        <h4>Coding challenges</h4>
        <P>
          This is a small collection of coding challenges I wanted to put
          together. I will continue to add to this over time and maybe it can be
          helpful one day.
        </P>
      </SectionBreak>
      <div className="row">
        <div className="col-md-7">
          <SectionBreak>
            <P>Duration: On going</P>
            <P>
              For this project I utilized this{' '}
              <a href="https://github.com/react-boilerplate/react-boilerplate">
                react-boilerplate
              </a>{' '}
              to initiate the project.
            </P>
            <P>
              <a href="https://react-read-file-app.herokuapp.com/">
                Coding Challenges web site
              </a>
            </P>
            <P>
              <a href="https://github.com/EhrenDavis12/react-read-file">
                Front End GetHub Repository
              </a>
            </P>
          </SectionBreak>
        </div>
        <div className="col-md-5 text-center">
          <Img src={CodeChallengesIcon} alt="CodeChallenges" />
        </div>
      </div>
    </div>
  );
}

export default CodeChallenges;
