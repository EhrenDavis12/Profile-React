import React from 'react';
// import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import { shallow } from 'enzyme';
import Drawer from '../index';

const testProps = {
  items: [1, 2, 3], // array.isRequired
  selectItem: x => x, // func.isRequired
  itemLabelAttr: 'itemLabelAttr', // string.isRequired
  itemKeyAttr: 'itemKeyAttr', // string.isRequired
  isDrawerOpen: true, // bool.isRequired
};
const renderComponent = (props = testProps) => shallow(<Drawer {...props} />);

describe('<Drawer />', () => {
  it('should have items attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('items')).toEqual(testProps.items);
  });

  it('should have selectItem attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('selectItem')).toEqual(testProps.selectItem);
  });

  it('should have itemLabelAttr attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('itemLabelAttr')).toEqual(
      testProps.itemLabelAttr,
    );
  });

  it('should have itemKeyAttr attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('itemKeyAttr')).toEqual(
      testProps.itemKeyAttr,
    );
  });

  it('should have isDrawerOpen attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('isDrawerOpen')).toEqual(
      testProps.isDrawerOpen,
    );
  });
});
