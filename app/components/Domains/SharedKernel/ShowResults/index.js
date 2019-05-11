/**
 *
 * ShowResults
 *
 */

// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function ShowResults(values) {
  await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});
