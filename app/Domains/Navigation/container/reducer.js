/*
 *
 * Navigation reducer
 *
 */

import { fromJS } from 'immutable';
import { TOGGLE_DRAWER, SELECT_LINK } from './constants';

// export const initialState = fromJS({
//   navigationLinks: [
//     {
//       key: 'AboutMe',
//       LinkTo: '/',
//       DisplayName: 'About Me',
//     },
//     {
//       key: 'Portfolio',
//       LinkTo: '/portfolio',
//       DisplayName: 'Portfolio',
//     },
//     {
//       key: 'Contact',
//       LinkTo: '/contact',
//       DisplayName: 'Contact',
//     },
//     {
//       key: 'Messages',
//       LinkTo: '/messages',
//       DisplayName: 'Messages',
//     },
//   ],
//   isDrawerOpen: false,
// });

export const initialState = fromJS({
  navigationLinks: [
    {
      key: 'AboutMe',
      LinkTo: 'ProfessionalIntro',
      DisplayName: 'About Me',
    },
    {
      key: 'Hobbies',
      LinkTo: 'Hobbies',
      DisplayName: 'Hobbies',
    },
    {
      key: 'ContactMe',
      LinkTo: 'ContactMePage',
      DisplayName: 'ContactMe',
    },
  ],
  isDrawerOpen: false,
});

function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
    case SELECT_LINK:
      return state.set('isDrawerOpen', false);
    default:
      return state;
  }
}

export default navigationReducer;
