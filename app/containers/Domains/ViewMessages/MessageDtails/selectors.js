import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the messageDtails state domain
 */

const selectMessageDtailsDomain = state =>
  state.get('messageDtails', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MessageDtails
 */

const makeSelectMessageDtails = () =>
  createSelector(selectMessageDtailsDomain, substate => substate.toJS());

export default makeSelectMessageDtails;
export { selectMessageDtailsDomain };
