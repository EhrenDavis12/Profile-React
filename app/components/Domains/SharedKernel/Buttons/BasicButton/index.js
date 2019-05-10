/**
 *
 * Navigation
 *
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './styles.css';

function button(props) {
  const handleKeyPress = (event, obj, func) => {
    if (event.key === 'Enter') {
      func(obj);
    }
  };

  return (
    <div
      onClick={() => props.func(props.obj || null)}
      onKeyDown={event => handleKeyPress(event, props.obj || null, props.func)}
      role="button"
      tabIndex={0}
      className={props.className}
    >
      {Children.toArray(props.children)}
    </div>
  );
}

button.propTypes = {
  func: PropTypes.func.isRequired,
  obj: PropTypes.shape(),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default button;
