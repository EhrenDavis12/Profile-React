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
//   ],
//   isDrawerOpen: false,
// });

export const initialState = fromJS({
  navigationLinks: [
    {
      key: 'Portfolio',
      LinkTo: 'Portfolio',
      DisplayName: 'Portfolio',
    },
    {
      key: 'Hobbies',
      LinkTo: 'Hobbies',
      DisplayName: 'Hobbies',
    },
    {
      key: 'TechnicalSkills',
      LinkTo: 'TechnicalSkills',
      DisplayName: 'Technical Skills',
    },
    {
      key: 'ProfessionalExperience',
      LinkTo: 'ProfessionalExperience',
      DisplayName: 'Professional Experience',
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
