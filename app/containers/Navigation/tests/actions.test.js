/* import { defaultAction } from '../actions';
import { DEFAULT_ACTION } from '../constants';

describe('Navigation actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
 */

import { TOGGLE_DRAWER, SELECT_LINK } from '../constants';
import { toggleDrawer, selectLink } from '../actions';

describe('Navigation actions', () => {
  describe('toggleDrawer Action', () => {
    it('has a type of TOGGLE_DRAWER', () => {
      const expected = {
        type: TOGGLE_DRAWER,
      };
      expect(toggleDrawer()).toEqual(expected);
    });
  });

  describe('toggleDrawer Action', () => {
    it('has a type of SELECT_LINK', () => {
      const expected = {
        type: SELECT_LINK,
        selectedLink: 'test',
      };
      expect(selectLink('test')).toEqual(expected);
    });
  });
});
