import React from 'react';
import 'jest-styled-components';

import { mount } from 'enzyme';

// import renderer from 'react-test-renderer';
import Drawer from '../index';
import { DrawerStyled, LinkStyled, CoverStyled } from '../styles';

const testData = {
  items: [
    {
      key: 'AboutMe',
      LinkTo: 'ProfessionalIntro',
      DisplayName: 'About Me',
    },
    {
      key: 'Hobbies',
      LinkTo: 'Hobbies',
      DisplayName: 'Hobbies',
    },
  ],
  selectItem: () => true,
  itemLabelAttr: 'DisplayName',
  itemKeyAttr: 'key',
  isDrawerOpen: false,
};
const renderComponent = mockData =>
  mount(
    <React.Fragment>
      <Drawer {...mockData} />
      <div id="ProfessionalIntro">ProfessionalIntro</div>
      <div id="Hobbies">Hobbies</div>
    </React.Fragment>,
  );

describe('<Drawer />', () => {
  it('should have 2 styled Button components', () => {
    const wrapper = renderComponent(testData);
    expect(wrapper.find(LinkStyled)).toHaveLength(2);
  });

  it('should have props of a closed Drawer', () => {
    const wrapper = renderComponent(testData);
    expect(wrapper.find(DrawerStyled)).toHaveStyleRule('left', '-300px');
  });

  it('should have props of a open Drawer', () => {
    const wrapper = renderComponent({
      ...testData,
      isDrawerOpen: true,
    });
    expect(wrapper.find(DrawerStyled)).toHaveStyleRule('left', '0');
  });

  it('should have children', () => {
    const wrapper = renderComponent(testData);
    expect(wrapper.find(DrawerStyled).prop('children').length).toEqual(2);
  });

  it('Children should handle click events', () => {
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
  });

  it('Close Drawer', () => {
    const mockCallBack = jest.fn(() => true);
    const propsData = {
      ...testData,
      selectItem: mockCallBack,
      isDrawerOpen: true,
    };
    const renderedComponent = renderComponent(propsData);
    renderedComponent
      .find(CoverStyled)
      .first()
      .simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
