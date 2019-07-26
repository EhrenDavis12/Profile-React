/**
 *
 * SuccessBanner
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './styles.css';

function ResultBanner({ message, resultClass }) {
  return (
    <div className="grayOut">
      <div className={resultClass}>{message}</div>
    </div>
  );
}

ResultBanner.propTypes = {
  message: PropTypes.string.isRequired,
  resultClass: PropTypes.string.isRequired,
};

export default ResultBanner;
