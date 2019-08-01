import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';
// import { LinkStyled } from '../styles';

import NavTopButtons from '../index';

const testData = {
  toggleDrawer: () => true,
  items: [
    {
      key: 'AboutMe',
      LinkTo: 'AboutMe',
      DisplayName: 'About Me',
    },
    {
      key: 'Portfolio',
      LinkTo: 'portfolio',
      DisplayName: 'Portfolio',
    },
  ],
  selectItem: () => true,
  itemLabelAttr: 'DisplayName',
  itemKeyAttr: 'key',
  isDrawerOpen: false,
};

const renderComponent = mockData => mount(<NavTopButtons {...mockData} />);

describe('<NavTopButtons />', () => {
  it('renders as expected', () => {
    const wrapper = renderComponent(testData);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have children', () => {
    const wrapper = renderComponent(testData);
    expect(wrapper.find('ul').prop('children').length).toEqual(2);
  });

  /* it('Children should handle click events', () => {
    const mockCallBack = jest.fn(() => true);
    const propsData = {
      ...testData,
      selectItem: mockCallBack,
      isDrawerOpen: true,
    };
    const renderedComponent = renderComponent(propsData);
    renderedComponent
      .find(LinkStyled)
      .first()
      .simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  }); */
});
