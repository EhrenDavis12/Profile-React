/**
 *
 * ContactMePanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ContactBody from 'components/ContactBody';
import HeaderBar from 'components/HeaderBar';
import Navigation from 'components/Navigation';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectContactMePanel from './selectors';
import reducer from './reducer';
import saga from './saga';

import { requestUser } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ContactMePanel extends React.Component {
  passProps = { ...this.props.contactMePanel.response };

  componentWillMount() {
    this.props.requestUser();
  }

  render() {
    return (
      <>
        <Navigation />
        <HeaderBar
          header="Contact Me"
          subMessage="Feel free to send me a message and i will get back to you"
        />
        <ContactBody {...this.passProps} />
      </>
    );
  }
}

ContactMePanel.propTypes = {
  requestUser: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contactMePanel: makeSelectContactMePanel(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestUser: () => dispatch(requestUser()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'contactMePanel', reducer });
const withSaga = injectSaga({ key: 'contactMePanel', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ContactMePanel);
