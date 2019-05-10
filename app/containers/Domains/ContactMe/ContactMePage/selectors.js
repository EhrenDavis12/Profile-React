import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the contactMePage state domain
 */

const selectContactMePageDomain = state =>
  state.get('contactMePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ContactMePage
 */

const makeSelectContactMePage = () =>
  createSelector(selectContactMePageDomain, substate => substate.toJS());

export default makeSelectContactMePage;
export { selectContactMePageDomain };
