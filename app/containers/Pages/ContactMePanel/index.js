/**
 *
 * ContactMePanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import ContactBody from 'components/ContactBody';
import PannelTest from 'components/PannelTest';
import HeaderBar from 'components/HeaderBar';
import Navigation from 'components/Navigation';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectContactMePanel from './selectors';
import reducer from './reducer';
import saga from './saga';

import { requestUser, requestUserMessages } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ContactMePanel extends React.Component {
  componentWillMount() {
    this.props.requestUser();
    this.props.requestUserMessages();
  }

  render() {
    let ContactBodyElement;
    if (this.props.response.data) {
      ContactBodyElement = (
        <PannelTest
          // {...this.props.contactMePanel}
          // selectUser={user => console.log('selectUser: ', user)}
          {...this.props}
        />
      );
    }
    return (
      <>
        <Navigation />
        <HeaderBar
          header="Contact Me"
          subMessage="Feel free to send me a message and i will get back to you"
        />
        {ContactBodyElement}
      </>
    );
  }
}

ContactMePanel.propTypes = {
  requestUser: PropTypes.func.isRequired,
};

/* const mapStateToProps = createStructuredSelector({
  contactMePanel: makeSelectContactMePanel(),
}); */

const mapStateToProps = makeSelectContactMePanel();

function mapDispatchToProps(dispatch) {
  return {
    requestUser: () => dispatch(requestUser()),
    requestUserMessages: () => dispatch(requestUserMessages()),
    selectUserMessage: userMessage =>
      console.log('selectUserMessage: ', userMessage),
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
