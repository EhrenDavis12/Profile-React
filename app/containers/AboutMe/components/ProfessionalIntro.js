// import PropTypes from 'prop-types';
import React from 'react';
// import HeaderBar from 'components/HeaderBar';
import { P, H2, Row12, PLeft } from './styles';

function ProfessionalIntro() {
  return (
    <div className="row">
      <Row12>
        <H2>Professional Intro</H2>
      </Row12>
      <Row12>
        <PLeft>
          Experienced Software Engineer with a demonstrated history of working
          in the computer software industry. Strong engineering professional
          skilled in Bash scripting, Automation tools, and Problem solving.
        </PLeft>
        <P>
          Software Engineer II at LawLogix Group, Inc.
          <br />
          Employed: May 2013 – PresentEmployment
          <br />
          located in Phoenix, AZ 85012
          <br />
        </P>
        <PLeft>
          Responsible for re-engineering, maintaining and error handling of an
          automated file batch upload system running daily transaction for 80+
          different clients. Reduced implementation by 60% and proactively
          decreased errors and client inquiries by 30%. Responsible for ensuring
          the proper handling of client sensitive information (PII). Review,
          Design, improve, and automate client data import process. Improved
          data imported accuracy by 42% and decreased steps by 33%. Utilized
          SQL, system logs, and created additional quality assurance
          techniques/tools and steps to ensure validations in identifying issues
          or answering client questions within same day SLA. Developed
          enhancements to the code base based on client’s SOW requirements.
        </PLeft>
      </Row12>
    </div>
  );
}

export default ProfessionalIntro;
