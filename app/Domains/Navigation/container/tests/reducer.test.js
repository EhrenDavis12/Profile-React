import { fromJS } from 'immutable';
import navigationReducer from '../reducer';
import { TOGGLE_DRAWER, SELECT_LINK } from '../constants';

describe('navigationReducer', () => {
  it('returns the initial state', () => {
    expect(navigationReducer(undefined, {})).toEqual(
      fromJS({
        navigationLinks: [
          {
            key: 'AboutMe',
            LinkTo: '/',
            DisplayName: 'About Me',
          },
          {
            key: 'Portfolio',
            LinkTo: '/portfolio',
            DisplayName: 'Portfolio',
          },
          {
            key: 'Contact',
            LinkTo: '/contact',
            DisplayName: 'Contact',
          },
          {
            key: 'Messages',
            LinkTo: '/messages',
            DisplayName: 'Messages',
          },
        ],
        isDrawerOpen: false,
      }),
    );
  });

  it('changes TOGGLE_DRAWER', () => {
    const resultJSON = navigationReducer(undefined, {
      type: TOGGLE_DRAWER,
    }).toJS();
    const { isDrawerOpen } = { ...resultJSON };
    expect(isDrawerOpen).toEqual(true);
  });

  it('changes SELECT_LINK', () => {
    const resultJSON = navigationReducer(undefined, {
      type: SELECT_LINK,
      selectedLink: 'test',
    }).toJS();
    const { isDrawerOpen } = { ...resultJSON };
    expect(isDrawerOpen).toEqual(false);
  });
});
