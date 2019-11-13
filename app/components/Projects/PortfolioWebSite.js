import React from 'react';
import styled from 'styled-components';
import { P, Div, SectionBreak, Img } from 'components/SharedStyles/styles';

const OnWall = require('images/OnWall.jpg');

export const ImgRotate90 = styled(Img)`
  transform: rotate(70deg);
`;

function PortfolioWebSite() {
  return (
    <div>
      <SectionBreak>
        <h4>Your Looking at it!</h4>
        <P>This project is the very website your looking at right now.</P>
      </SectionBreak>

      <div className="row">
        <div className="col-md-9">
          <Div>
            <div>Duration: Oct 21, 2019 to Present</div>
          </Div>
          <P>
            When you crack open this project you might be surprised with whats
            going on. It started off as a fun exploratory project to test the
            latest technology. It has been striped and repurposed to what you
            see now, The Portfolio.
          </P>
          <P>
            This Project was originally set out for the making of a large
            scalable website. Using technologys like Redux, Redux-Sagas, Jest
            and many more things. You can see the structure of what this looked
            like in the{' '}
            <a href="https://github.com/EhrenDavis12/Profile-React/tree/master/app/containers/Navigation">
              Navigation Container
            </a>
            .
          </P>
          <P>
            Why repurpose? This decision was made thanks to knowledge gained
            from the book ReWork. Here are a few points just to name a few.
            <ul>
              <li>
                Start making something - In the interview process I noticed some
                questions repeating, so why not answer them here.
              </li>
              <li>
                Ignore the details early on - I needed content not to focus on
                the setup of a website. This project had it all already just no
                content.
              </li>
              <li>
                Good enough is fine - Software development is an iterative
                process and will continue to change. Why wait for perfection?
              </li>
              <li>
                Quick wins - In the end using this project I was able to get my
                message out and do it fast. That is my win.
              </li>
            </ul>
          </P>
          <Div>
            <div>
              Check out the code here:{' '}
              <a href="https://github.com/EhrenDavis12/Profile-React">
                GetHub Repository
              </a>
            </div>
          </Div>
        </div>
        <div className="col-md-3 text-center">
          <ImgRotate90 src={OnWall} alt="OnWall" />
        </div>
      </div>
    </div>
  );
}

export default PortfolioWebSite;
