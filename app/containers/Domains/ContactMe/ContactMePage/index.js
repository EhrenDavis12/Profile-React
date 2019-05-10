/**
 *
 * ContactMePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Navigation from 'containers/Domains/Navigations/Navigation';
import HeaderBar from 'components/Domains/SharedKernel/HeaderBar';
import ContactBody from 'components/Domains/ContactMe/ContactBody';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectContactMePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { submitMessageForm } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ContactMePage extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <HeaderBar
          header="Contact Me"
          subMessage="Feel free to send me a message and i will get back to you"
        />
        <ContactBody {...this.props} />
      </>
    );
  }
}

ContactMePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

/* const mapStateToProps = createStructuredSelector({
  contactMePage: makeSelectContactMePage(),
}); */
const mapStateToProps = makeSelectContactMePage();

function mapDispatchToProps(dispatch) {
  return {
    submitMessageForm: email => dispatch(submitMessageForm(email)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'contactMePage', reducer });
const withSaga = injectSaga({ key: 'contactMePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ContactMePage);
