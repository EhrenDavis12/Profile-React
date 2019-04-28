/**
 *
 * MessageDtails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMessageDtails from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class MessageDtails extends React.Component {
  render() {
    return <div />;
  }
}

MessageDtails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  messageDtails: makeSelectMessageDtails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'messageDtails', reducer });
const withSaga = injectSaga({ key: 'messageDtails', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MessageDtails);
