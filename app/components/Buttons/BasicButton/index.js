/**
 *
 * Navigation
 *
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './styles.css';

function BasicButton(props) {
  const handleKeyPress = (event, obj, onClick) => {
    if (event.key === 'Enter') {
      onClick(obj);
    }
  };

  return (
    <div
      onClick={() => props.onClick(props.obj || null)}
      onKeyDown={event =>
        handleKeyPress(event, props.obj || null, props.onClick)
      }
      role="button"
      tabIndex={0}
      className={props.className}
    >
      {Children.toArray(props.children)}
    </div>
  );
}

BasicButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  obj: PropTypes.shape(),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default BasicButton;
