/**
 *
 * MessageDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MessageDetails({ selectedUserMessage }) {
  const { subject, createdAt, message } = selectedUserMessage;
  return (
    <div className="MD-Box">
      <div className="subject">subject: {subject}</div>
      <div className="date">Date: {createdAt.replace(/T.*/, '')}</div>
      <div className="time">
        Time: {createdAt.replace(/.*T/, '').replace(/\.\d*Z/, '')}
      </div>
      <div className="Message">Message: {message}</div>
    </div>
  );
}

MessageDetails.propTypes = {
  selectedUserMessage: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default MessageDetails;
