/**
 *
 * ContactBody
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import TextInputSingleLine from 'components/Domains/SharedKernel/InputBoxes/TextInputSingleLine';
import MessageInput from 'components/Domains/SharedKernel/InputBoxes/MessageInput';
// import SubmitButton from 'components/Domains/SharedKernel/Buttons/SubmitButton';
// import Button from 'components/Domains/SharedKernel/Buttons/Button';

function ContactBody() {
  return (
    <div className="container">
      <div className="row col-lg-12">
        <a href="https://www.linkedin.com/in/ehren-davis-ba078a2a/">
          To Indeed Profile
        </a>
      </div>
      <div className="email_form">
        <div className="row">
          <div className="col-md-6">
            <TextInputSingleLine
              label="Your name"
              // "Your name"
              // ${props.response.data.auth0Id}
              placeholder="John Wick"
              id="fullName"
            />
          </div>
        </div>
        <div className="row col-12">
          <TextInputSingleLine
            label="Email address"
            placeholder="example@Gmail.com"
            id="emailAddress"
          />
        </div>
        <div className="row col-12">
          <MessageInput
            label="Please leave a message"
            id="email_message"
            rows="4"
          />
        </div>
        <div className="row col-12">
          {/* <Button href='/results' onEnter={this.props.onEnter} handleRoute={onClickButton}>{button.defaultMessage}</Button> */}
          {/* <SubmitButton textValue="Submit" onClick={props.postMessage} /> */}
        </div>
      </div>
    </div>
  );
}

ContactBody.propTypes = {
  // responseTest: PropTypes.arrayOf(PropTypes.shape({})),
  /* responseTest: PropTypes.shape({
    data: PropTypes.shape({
      auth0Id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired, */
};

export default ContactBody;
