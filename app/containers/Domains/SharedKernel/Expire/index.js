/**
 *
 * Expire
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectExpire from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  clearTimerAction,
  setTimerAction,
  // showChildrenAction,
  hideChildrenAction,
} from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Expire extends React.Component {
  componentWillReceiveProps(nextProps) {
    // reset the timer if children are changed
    if (nextProps.children !== this.props.children) {
      this.props.onSetTimerAction(
        this.props.delay,
        this.props.onHideChildrenAction,
        this.props.onClearTimerAction,
      );
    }
  }

  componentDidMount() {
    this.props.onSetTimerAction(
      this.props.delay,
      this.props.onHideChildrenAction,
      this.props.onClearTimerAction,
    );
  }

  componentWillUnmount() {
    this.props.onClearTimerAction();
  }

  render() {
    return this.props.visible ? <div>{this.props.children}</div> : null;
    // return null;
  }
}

Expire.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  delay: PropTypes.number.isRequired,
  // actionAfterExpire: PropTypes.func,
  onSetTimerAction: PropTypes.func.isRequired,
  onHideChildrenAction: PropTypes.func.isRequired,
  onClearTimerAction: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

const mapStateToProps = makeSelectExpire();

function mapDispatchToProps(dispatch) {
  return {
    // dispatch,
    onSetTimerAction: (delay, onHideChildrenAction, onClearTimerAction) =>
      dispatch(setTimerAction(delay, onHideChildrenAction, onClearTimerAction)),
    onHideChildrenAction: () => dispatch(hideChildrenAction()),
    onClearTimerAction: () => dispatch(clearTimerAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'expire', reducer });
const withSaga = injectSaga({ key: 'expire', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Expire);
