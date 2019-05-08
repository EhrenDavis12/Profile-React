import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ViewMessagesPage state domain
 */

const selectViewMessagesPageDomain = state =>
  state.get('ViewMessagesPage', initialState);

/**
 * Other specific selectors
 */
// const selectUserMessages = state => state.get('userMessages', initialState);
// export const getUserMessages = state => state.userMessages;

/**
 * Default selector used by ViewMessagesPage
 */

const makeSelectViewMessagesPage = () =>
  createSelector(selectViewMessagesPageDomain, subState => subState.toJS());

const makeSelectUserMessages = () =>
  createSelector(selectViewMessagesPageDomain, subState =>
    subState.get('userMessages'),
  );

/*   const getUserMessages = () => state => state.userMessages;
const makeSelectViewMessagesPage = () =>
  createSelector(
    selectViewMessagesPageDomain,
    getUserMessages(),
    (substate, userMessages) =>
      Object.assign(substate.toJS(), { userMessages }),
  ); */

export default makeSelectViewMessagesPage;
export { selectViewMessagesPageDomain, makeSelectUserMessages };
