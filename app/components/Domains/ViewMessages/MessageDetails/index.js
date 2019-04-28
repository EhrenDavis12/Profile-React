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
      <div className="createdAt">Sent At: {createdAt}</div>
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
