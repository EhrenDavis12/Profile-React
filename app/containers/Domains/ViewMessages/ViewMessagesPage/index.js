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

import UserMessageBody from 'components/Domains/ViewMessages/UserMessagesBody';
import HeaderBar from 'components/Domains/SharedKernel/HeaderBar';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectViewMessagesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import { requestUser, requestUserMessages, selectUserMessage } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ViewMessagesPage extends React.Component {
  componentWillMount() {
    this.props.requestUser();
    this.props.requestUserMessages();
  }

  render() {
    let userMessageBodyElement;
    if (this.props.userData.uuid) {
      userMessageBodyElement = (
        <UserMessageBody
          // {...this.props.ViewMessagesPage}
          // selectUser={user => console.log('selectUser: ', user)}
          {...this.props}
        />
      );
    }
    return (
      <React.Fragment>
        <HeaderBar
          header="Your messages are here"
          subMessage="Take a look at your recent messages"
        />
        {userMessageBodyElement}
      </React.Fragment>
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

export function mapDispatchToProps(dispatch) {
  return {
    requestUser: () => dispatch(requestUser()),
    requestUserMessages: () => dispatch(requestUserMessages()),
    selectUserMessage: userMessage => dispatch(selectUserMessage(userMessage)),
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
