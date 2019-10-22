/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class PortfolioPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1>PortfolioPage</h1>
      </React.Fragment>
    );
  }
}
