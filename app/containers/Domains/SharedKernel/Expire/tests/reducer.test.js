import { fromJS } from 'immutable';
import expireReducer from '../reducer';

describe('expireReducer', () => {
  it('returns the initial state', () => {
    expect(expireReducer(undefined, {})).toEqual(fromJS({}));
  });
});
