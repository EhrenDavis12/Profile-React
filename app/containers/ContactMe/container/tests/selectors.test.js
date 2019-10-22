// import { selectContactMePageDomain } from '../selectors';

import { fromJS } from 'immutable';
import makeSelectContactMePage, {
  selectContactMePageDomain,
  makeSelectMessageForm,
} from '../selectors';

describe('selectContactMePage', () => {
  describe('selectContactMePageDomain', () => {
    it('should select state from selectContactMePageDomain', () => {
      const globalState = fromJS({
        subStateTest: true,
      });
      const mockedState = fromJS({
        contactMePage: globalState,
      });
      expect(selectContactMePageDomain(mockedState)).toEqual(globalState);
    });
  });

  describe('makeSelectMessageForm', () => {
    const selector = makeSelectMessageForm();
    it('should select the messageForm', () => {
      const expected = fromJS({ messageStatus: 'closed' });
      const mockedState = fromJS({
        contactMePage: {
          messageForm: expected,
        },
      });

      expect(selector(mockedState)).toEqual(expected);
    });
  });

  describe('makeSelectContactMePage', () => {
    const selector = makeSelectContactMePage();
    it('should select the makeSelectContactMePage', () => {
      const data = { messageStatus: 'closed' };
      const expected = { messageForm: data };
      const mockedState = fromJS({
        contactMePage: {
          messageForm: fromJS(data),
        },
      });
      expect(selector(mockedState)).toEqual(expected);
    });
  });
});
