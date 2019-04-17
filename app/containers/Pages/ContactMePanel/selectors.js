import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the contactMePanel state domain
 */

const selectContactMePanelDomain = state =>
  state.get('contactMePanel', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ContactMePanel
 */

const makeSelectContactMePanel = () =>
  createSelector(selectContactMePanelDomain, substate => substate.toJS());

export default makeSelectContactMePanel;
export { selectContactMePanelDomain };
