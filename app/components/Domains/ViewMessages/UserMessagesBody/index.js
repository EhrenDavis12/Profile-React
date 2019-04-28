/**
 *
 * UserMessagesBody
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import BasicButton from 'components/Domains/SharedKernel/Buttons/BasicButton';

function UserMessagesBody({
  // responseTest,
  userData,
  userMessages,
  selectUserMessage,
}) {
  // const { responseTest, userData, selectUser } = props;
  const dataList = userMessages.map(x => (
    <BasicButton key={x.uuid} func={selectUserMessage} obj={x}>
      subject: {x.subject}
    </BasicButton>
  ));
  return (
    <div className="container">
      <div>Your google ID is: {userData.auth0Id}</div>
      {dataList}
    </div>
  );
}

UserMessagesBody.propTypes = {
  // responseTest: PropTypes.arrayOf(PropTypes.shape({})),
  userMessages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  userData: PropTypes.shape({
    auth0Id: PropTypes.string.isRequired,
  }).isRequired,

  selectUserMessage: PropTypes.func.isRequired,
};

export default UserMessagesBody;
