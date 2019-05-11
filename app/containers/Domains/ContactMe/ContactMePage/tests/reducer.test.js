import { fromJS } from 'immutable';
import contactMePageReducer from '../reducer';

describe('contactMePageReducer', () => {
  it('returns the initial state', () => {
    expect(contactMePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
