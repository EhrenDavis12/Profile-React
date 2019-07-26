import { fromJS } from 'immutable';
import makeSelectViewMessagesPage, {
  selectViewMessagesPageDomain,
  makeSelectUserMessages,
} from '../selectors';

describe('selectViewMessagesPageDomain', () => {
  it('should select state from selectViewMessagesPageDomain', () => {
    const globalState = fromJS({
      subStateTest: true,
    });
    const mockedState = fromJS({
      ViewMessagesPage: globalState,
    });
    expect(selectViewMessagesPageDomain(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectUserMessages', () => {
  const selector = makeSelectUserMessages();
  it('should select the userMessages', () => {
    const expected = fromJS([{ id2: '3' }, { id2: '1' }]);
    const mockedState = fromJS({
      ViewMessagesPage: {
        userMessages: expected,
      },
    });

    expect(selector(mockedState)).toEqual(expected);
  });
});

describe('makeSelectViewMessagesPage', () => {
  const selector = makeSelectViewMessagesPage();
  it('should select the makeSelectViewMessagesPage', () => {
    const data = [{ id2: '3' }, { id2: '1' }];
    const expected = { userMessages: data };
    const mockedState = fromJS({
      ViewMessagesPage: {
        userMessages: fromJS(data),
      },
    });
    expect(selector(mockedState)).toEqual(expected);
  });
});
