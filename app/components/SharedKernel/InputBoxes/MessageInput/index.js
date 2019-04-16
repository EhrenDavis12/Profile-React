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
      <div>{props.label}</div>
      <textarea {...props} className="form-control" id={props.id} />
    </div>
  );
}

MessageInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MessageInput;
