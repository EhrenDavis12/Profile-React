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
import { timeClass, dateClass, subjectClass } from './Wrapper';

function MessageDetails({ userMessage, selectUserMessage }) {
  const { subject, createdAt, message } = userMessage;
  return (
    <div className="MD-Box">
      <BasicButton onClick={selectUserMessage} obj={userMessage}>
        {/* <div className="row"> */}
        {/* <div className="col-md-10"> */}
        <div className={subjectClass}>subject: {subject}</div>
        {/* </div> */}

        {/* <div className="col-md-2"> */}
        <div className={dateClass}>Date: {createdAt.replace(/T.*/, '')}</div>
        <div className={timeClass}>
          Time: {createdAt.replace(/.*T/, '').replace(/\.\d*Z/, '')}
        </div>
        {/* </div> */}
        {/* </div> */}
        <div
          className={classNames('Message wordWrap', {
            MessageShow: userMessage.show,
          })}
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
