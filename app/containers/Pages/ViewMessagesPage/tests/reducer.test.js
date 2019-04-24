import { fromJS } from 'immutable';
import contactMePanelReducer from '../reducer';

describe('contactMePanelReducer', () => {
  it('returns the initial state', () => {
    expect(contactMePanelReducer(undefined, {})).toEqual(fromJS({}));
  });
});
