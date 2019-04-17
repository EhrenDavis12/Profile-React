/**
 *
 * Navigation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './index.css';

function MessageInput(props) {
  return (
    <div>
      <input {...props} className="btn btn-primary" type="submit" />
    </div>
  );
}

MessageInput.propTypes = {
  textValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MessageInput;
