/**
 *
 * Navigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import NavigationComponents from 'components/Domains/SharedKernel/Navigation';
import AppBar from 'components/Domains/SharedKernel/AppBar';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNavigation from './selectors';
import reducer from './reducer';
import saga from './saga';
import { toggleDrawer } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Navigation extends React.Component {
  render() {
    return (
      <div>
        <AppBar {...this.props} />
      </div>
    );
  }
}

Navigation.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navigation: makeSelectNavigation(),
});
// const mapStateToProps = createStructuredSelector();

function mapDispatchToProps(dispatch) {
  return {
    toggleDrawer: () => dispatch(toggleDrawer()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'navigation', reducer });
const withSaga = injectSaga({ key: 'navigation', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Navigation);
