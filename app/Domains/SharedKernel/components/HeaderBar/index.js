/**
 *
 * HeaderBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './styles.css';

function HeaderBar(props) {
  return (
    <div className="jumbotron">
      <h1>{props.header}</h1>
      <p>{props.subMessage}</p>
    </div>
  );
}

HeaderBar.propTypes = {
  header: PropTypes.string.isRequired,
  subMessage: PropTypes.string.isRequired,
};

export default HeaderBar;
