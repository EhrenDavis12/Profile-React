/**
 *
 * ViewMessagesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import UserMessageBody from 'components/UserMessagesBody';
import HeaderBar from 'components/HeaderBar';
import Navigation from 'components/Navigation';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectViewMessagesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import { requestUser, requestUserMessages } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ViewMessagesPage extends React.Component {
  componentWillMount() {
    this.props.requestUser();
    this.props.requestUserMessages();
  }

  render() {
    let userMessageBodyElement;
    debugger;
    if (this.props.response.data) {
      debugger;
      userMessageBodyElement = (
        <UserMessageBody
          // {...this.props.ViewMessagesPage}
          // selectUser={user => console.log('selectUser: ', user)}
          {...this.props}
        />
      );
    }
    return (
      <>
        <Navigation />
        <HeaderBar
          header="Your messages are here"
          subMessage="Take a look at your recent messages"
        />
        {userMessageBodyElement}
      </>
    );
  }
}

ViewMessagesPage.propTypes = {
  requestUser: PropTypes.func.isRequired,
  requestUserMessages: PropTypes.func.isRequired,
};

/* const mapStateToProps = createStructuredSelector({
  ViewMessagesPage: makeSelectViewMessagesPage(),
}); */

const mapStateToProps = makeSelectViewMessagesPage();

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

const withReducer = injectReducer({ key: 'ViewMessagesPage', reducer });
const withSaga = injectSaga({ key: 'ViewMessagesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ViewMessagesPage);
