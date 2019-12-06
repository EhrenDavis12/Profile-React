import { fromJS } from 'immutable';
import { selectNavigationDomain } from '../selectors';

describe('selectNavigationDomain', () => {
  it('should select the global state', () => {
    const globalState = fromJS({
      subStateTest: true,
    });
    const mockedState = fromJS({
      Navigation: globalState,
    });
    expect(selectNavigationDomain(mockedState)).toEqual(globalState);
  });
});
