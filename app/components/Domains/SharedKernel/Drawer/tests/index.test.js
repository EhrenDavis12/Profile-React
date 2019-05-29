import React from 'react';
// import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';
import Drawer from '../index';

const testData = {
  items: [
    {
      key: 'AboutMe',
      LinkTo: '/',
      DisplayName: 'About Me',
    },
    {
      key: 'Portfolio',
      LinkTo: '/portfolio',
      DisplayName: 'Portfolio',
    },
  ],
  selectItem: () => true,
  itemLabelAttr: 'DisplayName',
  itemKeyAttr: 'key',
  isDrawerOpen: false,
};
const renderComponent = mockData => shallow(<Drawer {...mockData} />);

describe('<Drawer />', () => {
  it('should have className for closed drawer', () => {
    const renderedComponent = renderComponent(testData);
    expect(renderedComponent.prop('className')).toEqual('drawer');
  });

  it('should have className for open drawer', () => {
    const renderedComponent = renderComponent({
      ...testData,
      isDrawerOpen: true,
    });
    expect(renderedComponent.prop('className')).toEqual('drawer drawerOpen');
  });

  it('should have children', () => {
    const renderedComponent = renderComponent(testData);
    expect(renderedComponent.prop('children').length).toEqual(2);
  });

  it('Children should handle click events', () => {
    const mockCallBack = jest.fn(() => true);
    const propsData = {
      ...testData,
      selectItem: mockCallBack,
      isDrawerOpen: true,
    };
    const tree = renderer.create(<Drawer {...propsData} />);
    tree.root
      .findByProps({ className: 'drawer drawerOpen' })
      .children[0].props.onClick();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
