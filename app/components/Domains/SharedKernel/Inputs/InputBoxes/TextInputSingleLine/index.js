/**
 *
 * Navigation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './index.css';

function TextInput(props) {
  return (
    <div>
      <div>{props.label}</div>
      <input {...props} type="text" className="form-control" id={props.id} />
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default TextInput;
