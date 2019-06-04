import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
// import { enzymeFind } from 'styled-components/test-utils';
import { browserHistory } from 'react-router-dom';
import configureStore from '../../../../../configureStore';

import Navigation from '../index';

describe('<Navigation />', () => {
  let store;
  let wrapper;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
    wrapper = renderComponentMount();
  });

  const renderComponentMount = () =>
    mount(
      <Provider store={store}>
        <Navigation />
      </Provider>,
    );
  // mount(<Navigation {...navigationLinksProps} />);

  describe('<Navigation /> snap Shots', () => {
    it('renders as expected with populated messages', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Navigation />', () => {
    it('should render its NavigationBody', () => {
      expect(wrapper.find('NavigationBody').length).toEqual(1);
    });
  });
});
