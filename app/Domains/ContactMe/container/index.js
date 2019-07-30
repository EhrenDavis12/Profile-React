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

import HeaderBar from 'Domains/SharedKernel/components/HeaderBar';
import ContactBody from 'Domains/ContactMe/components/ContactBody';
import ResultBanner from 'Domains/SharedKernel/components/ResultBanner';
import Expire from 'Domains/SharedKernel/containers/Expire';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { submitMessageForm, closedSuccessMessage } from './actions';
import makeSelectContactMePage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class ContactMePage extends React.Component {
  render() {
    const { messageStatus } = this.props;
    const message =
      messageStatus === 'succeeded' ? 'Message Sent' : 'Message Failed';
    const resultBanner =
      messageStatus !== 'closed' ? (
        <Expire delay={1500} {...this.props}>
          <ResultBanner resultClass={messageStatus} message={message} />
        </Expire>
      ) : null;
    return (
      <React.Fragment>
        <HeaderBar
          header="Contact Me"
          subMessage="Feel free to send me a message and i will get back to you"
        />
        {resultBanner}
        <ContactBody {...this.props} />
      </React.Fragment>
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

export function mapDispatchToProps(dispatch) {
  return {
    submitMessageForm: messageForm => dispatch(submitMessageForm(messageForm)),
    actionAfterExpire: () => dispatch(closedSuccessMessage()),
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