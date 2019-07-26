/*
 *
 * Navigation actions
 *
 */

import { TOGGLE_DRAWER, SELECT_LINK } from './constants';

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER,
  };
}

export function selectLink(selectedLink) {
  return {
    type: SELECT_LINK,
    selectedLink,
  };
}
