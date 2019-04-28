import { fromJS } from 'immutable';
import messageDtailsReducer from '../reducer';

describe('messageDtailsReducer', () => {
  it('returns the initial state', () => {
    expect(messageDtailsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
