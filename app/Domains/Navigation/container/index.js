/**
 *
 * Navigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import NavigationBody from 'Domains/Navigation/components/NavigationBody';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNavigation from './selectors';
import reducer from './reducer';
import saga from './saga';
import { toggleDrawer, selectLink } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Navigation extends React.Component {
  render() {
    return (
      <div>
        <NavigationBody {...this.props} />
      </div>
    );
  }
}

Navigation.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

/* const mapStateToProps = createStructuredSelector({
  Navigation: makeSelectNavigation(),
}); */
const mapStateToProps = makeSelectNavigation();

export function mapDispatchToProps(dispatch) {
  return {
    toggleDrawer: () => dispatch(toggleDrawer()),
    selectItem: linkSelected => dispatch(selectLink(linkSelected)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'Navigation', reducer });
const withSaga = injectSaga({ key: 'Navigation', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Navigation);
