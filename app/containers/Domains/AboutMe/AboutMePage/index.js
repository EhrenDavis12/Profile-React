/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import HeaderBar from 'components/Domains/SharedKernel/HeaderBar';

/* eslint-disable react/prefer-stateless-function */
export default class AboutMePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <HeaderBar
          header="Ehren Davis"
          subMessage="Sr. Developer at Hyland .Inc"
        />
      </React.Fragment>
    );
  }
}
