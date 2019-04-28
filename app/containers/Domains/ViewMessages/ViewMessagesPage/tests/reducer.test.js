import { fromJS } from 'immutable';
import viewMessagesPageReducer from '../reducer';

describe('viewMessagesPageReducer', () => {
  it('returns the initial state', () => {
    expect(viewMessagesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
