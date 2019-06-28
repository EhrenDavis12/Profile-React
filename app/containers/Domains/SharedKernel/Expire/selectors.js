import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the expire state domain
 */

const selectExpireDomain = state => state.get('expire', initialState);

/**
 * Other specific selectors
 */
const makeSelectTimer = () =>
  createSelector(selectExpireDomain, subState => subState.get('timer'));

const makeSelectVisible = () =>
  createSelector(selectExpireDomain, subState => subState.get('visible'));

/**
 * Default selector used by Expire
 */

const makeSelectExpire = () =>
  createSelector(selectExpireDomain, substate => substate.toJS());

export default makeSelectExpire;
export { selectExpireDomain, makeSelectTimer, makeSelectVisible };
