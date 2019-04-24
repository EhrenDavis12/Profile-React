/**
 *
 * UserMessagesBody
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import BasicButton from 'components/SharedKernel/Buttons/BasicButton';

function UserMessagesBody({
  // responseTest,
  response,
  userMessages,
  selectUserMessage,
}) {
  // const { responseTest, response, selectUser } = props;
  const dataList = userMessages.map(x => (
    <BasicButton key={x.uuid} func={selectUserMessage} obj={x}>
      subject: {x.subject}
    </BasicButton>
  ));
  return (
    <div className="container">
      <div>Your google ID is: {response.data.auth0Id}</div>
      {dataList}
    </div>
  );
}

UserMessagesBody.propTypes = {
  // responseTest: PropTypes.arrayOf(PropTypes.shape({})),
  userMessages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  response: PropTypes.shape({
    data: PropTypes.shape({
      auth0Id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

  selectUserMessage: PropTypes.func.isRequired,
};

export default UserMessagesBody;
