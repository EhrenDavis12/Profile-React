import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the Navigation state domain
 */

const selectNavigationDomain = state => state.get('Navigation', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Navigation
 */

const makeSelectNavigation = () =>
  createSelector(selectNavigationDomain, substate => substate.toJS());

export default makeSelectNavigation;
export { selectNavigationDomain };
