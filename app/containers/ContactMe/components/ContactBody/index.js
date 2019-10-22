/**
 *
 * ContactBody
 *
 */

import React from 'react';

import PropTypes from 'prop-types';
import './styles.css';
// import styled from 'styled-components';
import BasicButton from 'components/Buttons/BasicButton';
import validator from 'email-validator';
import classNames from 'classnames';

// function ContactBody() {
class ContactBody extends React.Component {
  state = {};

  submit = () => {
    const email = this.clientEmailField.value;
    if (!validator.validate(email)) {
      this.setState({ errorText: 'Please provide a valid email' });
      return;
    }
    this.setState({ errorText: null });

    this.props.submitMessageForm({
      contactInfo: email,
      userUuid: process.env.USER_UUID,
      subject: this.subjectField.value,
      message: this.messageField.value,
    });
  };

  clear = () => {
    this.setState({ errorText: '' });
    this.messageField.value = '';
    this.clientEmailField.value = '';
    this.subjectField.value = '';
  };

  render() {
    const fieldError = this.state.errorText ? (
      <div className="errorMessage">{this.state.errorText}</div>
    ) : null;
    return (
      <div className="messageForm">
        <input
          id="emailInput"
          className={classNames('input', {
            inputError: this.state.errorText,
          })}
          placeholder="Your Email"
          ref={f => {
            this.clientEmailField = f;
          }}
          type="email"
        />
        {fieldError}
        <input
          id="subjectInput"
          className="input"
          placeholder="Subject"
          ref={f => {
            this.subjectField = f;
          }}
          type="text"
        />
        <textarea
          id="messageInput"
          className="inputLargeText"
          placeholder="Your Message"
          ref={f => {
            this.messageField = f;
          }}
          type="text"
        />
        <div className="actionContainer">
          <BasicButton id="clear" className="button" onClick={this.clear}>
            Clear
          </BasicButton>
          <BasicButton id="submit" className="button" onClick={this.submit}>
            Submit
          </BasicButton>
        </div>
      </div>
    );
  }
}

ContactBody.propTypes = {
  // responseTest: PropTypes.arrayOf(PropTypes.shape({})),
  /* responseTest: PropTypes.shape({
    data: PropTypes.shape({
      auth0Id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired, */
  submitMessageForm: PropTypes.func.isRequired,
};

export default ContactBody;
