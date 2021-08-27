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

import NavigationBody from 'components/Navigation/NavigationBody';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNavigation from './selectors';
import reducer from './reducer';
import saga from './saga';
import { toggleDrawer, selectLink } from './actions';

let lastScrollY = 0;
let ticking = false;

/* eslint-disable react/prefer-stateless-function */
export class Navigation extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  nav = React.createRef();

  handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.nav.current.style.top = `${lastScrollY}px`;
        ticking = false;
      });

      console.log('scroll Fire');
      ticking = true;
    }
  };

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
