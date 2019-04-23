/**
 *
 * ContactBody
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ContactBody({ responseTest, response, selectUser }) {
  // const { responseTest, response, selectUser } = props;

  const dataList = responseTest.map(x => (
    <div
      key={x.uuid}
      // onClick={() => selectUser(x)}
      onClick={() => selectUser(x)}
      onKeyDown={event => handleKeyPress(event, x, selectUser)}
      role="button"
      tabIndex={0}
    >
      {x.auth0Id}
    </div>
  ));
  return (
    <div className="container">
      <div>Your google ID is: {response.data.auth0Id}</div>
      {dataList}
    </div>
  );
}

const handleKeyPress = (event, obj, func) => {
  if (event.key === 'Enter') {
    func(obj);
  }
};

ContactBody.propTypes = {
  responseTest: PropTypes.arrayOf(PropTypes.shape({})),

  response: PropTypes.shape({
    data: PropTypes.shape({
      auth0Id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

  selectUser: PropTypes.func.isRequired,
};

export default ContactBody;
