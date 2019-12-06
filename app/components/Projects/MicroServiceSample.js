import React from 'react';
import { P, Div, SectionBreak, Img, Ul } from 'components/SharedStyles/styles';

const MicroServices = require('images/MicroServices.png');

function PortfolioWebSite() {
  return (
    <div>
      <SectionBreak>
        <h4>MicroService Sample</h4>
        <P>Its small as expected, mostly CRUD with a dab of business logic</P>
      </SectionBreak>

      <div className="row">
        <div className="col-md-9">
          <P>
            <strong>Concept:</strong> This project is here to provide an API
            with support for integration message handling. Integrating with
            Whats App and Gmail
          </P>
          <P>
            <strong>Purpose:</strong> From my web site I want people to be able
            to contact me with out having my direct information. On doing so I
            would like to get a WhatsApp message telling me I have an Email to
            look at.
          </P>

          <P>
            <strong>Check this out!</strong> The project is small we have our{' '}
            <a href="https://github.com/EhrenDavis12/contactMeAPI/blob/master/models/message.js">
              models
            </a>
            ,{' '}
            <a href="https://github.com/EhrenDavis12/contactMeAPI/blob/master/routes/CRUD/messageRouts.js">
              routs
            </a>{' '}
            and a{' '}
            <a href="https://github.com/EhrenDavis12/contactMeAPI/blob/master/businessLogic/messageServices/whatsAppMessage.js">
              service layer
            </a>
            . The cool thing here is the{' '}
            <a href="https://github.com/EhrenDavis12/contactMeAPI/blob/master/businessLogic/util/errorHelpers.js">
              error handling
            </a>
            . Im using awaits to control the work flow. To create a new end
            point just copy one change the route and change the service called.
            Any where in the service just throw and error! The rest will be
            handled and the API user will be notified of the error.
          </P>
          <P>
            <strong>Technology:</strong>
            <Ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Sequelize</li>
              <li>Twilio API</li>
              <li>Gmail API</li>
            </Ul>
          </P>

          <Div>
            <div>
              Check out the code here:{' '}
              <a href="https://github.com/EhrenDavis12/contactMeAPI">
                GetHub Repository
              </a>
            </div>
          </Div>
        </div>
        <div className="col-md-3 text-center">
          <Img src={MicroServices} alt="MicroServices" />
        </div>
      </div>
    </div>
  );
}

export default PortfolioWebSite;
