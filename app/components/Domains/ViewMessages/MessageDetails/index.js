/**
 *
 * MessageDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './styles.css';
import classNames from 'classnames';
import BasicButton from 'components/Domains/SharedKernel/Buttons/BasicButton';

function MessageDetails({ userMessage, selectUserMessage }) {
  const { subject, createdAt, message } = userMessage;
  return (
    <div className="MD-Box">
      <BasicButton func={selectUserMessage} obj={userMessage}>
        <div className="subject">subject: {subject}</div>
        <div className="date">Date: {createdAt.replace(/T.*/, '')}</div>
        <div className="time">
          Time: {createdAt.replace(/.*T/, '').replace(/\.\d*Z/, '')}
        </div>
        <div
          className={classNames('Message', { MessageShow: userMessage.show })}
        >
          Message: {message}
        </div>
      </BasicButton>
    </div>
  );
}

MessageDetails.propTypes = {
  userMessage: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  selectUserMessage: PropTypes.func.isRequired,
};

export default MessageDetails;
