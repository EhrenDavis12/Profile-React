import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectViewMessagesPageDomain = state =>
  state.get('ViewMessagesPage', initialState);

const makeSelectViewMessagesPage = () =>
  createSelector(selectViewMessagesPageDomain, subState => subState.toJS());

const makeSelectUserMessages = () =>
  createSelector(selectViewMessagesPageDomain, subState =>
    subState.get('userMessages'),
  );

export default makeSelectViewMessagesPage;
export { selectViewMessagesPageDomain, makeSelectUserMessages };
