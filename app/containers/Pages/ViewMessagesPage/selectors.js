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

/**
 * Default selector used by ViewMessagesPage
 */

const makeSelectViewMessagesPage = () =>
  createSelector(selectViewMessagesPageDomain, substate => substate.toJS());

export default makeSelectViewMessagesPage;
export { selectViewMessagesPageDomain };
