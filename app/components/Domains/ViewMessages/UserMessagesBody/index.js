/**
 *
 * UserMessagesBody
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
// import styled from 'styled-components';
// import BasicButton from 'components/Domains/SharedKernel/Buttons/BasicButton';
import MessageDetails from 'components/Domains/ViewMessages/MessageDetails';

function UserMessagesBody({
  // responseTest,
  userData,
  userMessages,
  selectUserMessage,
  // selectedUserMessage,
}) {
  // const { responseTest, userData, selectUser } = props;
  /* const dataList = userMessages.map(
    x =>
      selectedUserMessage && x.uuid === selectedUserMessage.uuid ? (
        <MessageDetails key={x.uuid} selectedUserMessage={x} />
      ) : (
        <BasicButton key={x.uuid} func={selectUserMessage} obj={x}>
          subject: {x.subject}
        </BasicButton>
      ),
  ); */
  let dataList;
  if (userMessages) {
    dataList = userMessages.map(x => (
      <MessageDetails
        key={x.uuid}
        userMessage={x}
        selectUserMessage={selectUserMessage}
      />
    ));
  }

  return (
    <div>
      <div>Your google ID is: {userData.auth0Id}</div>
      {dataList}
    </div>
  );
}

UserMessagesBody.propTypes = {
  // responseTest: PropTypes.arrayOf(PropTypes.shape({})),
  userMessages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // selectedUserMessage: PropTypes.shape({}),
  userData: PropTypes.shape({
    auth0Id: PropTypes.string.isRequired,
  }).isRequired,

  selectUserMessage: PropTypes.func.isRequired,
};

export default UserMessagesBody;
