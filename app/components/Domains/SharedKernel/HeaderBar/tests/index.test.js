import React from 'react';
// import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';
import { shallow } from 'enzyme';

import HeaderBar from '../index';

const header = 'test.png';
const subMessage = 'test';
const renderComponent = (props = {}) =>
  shallow(<HeaderBar header={header} subMessage={subMessage} {...props} />);

describe('<HeaderBar />', () => {
  it('should have header attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('header')).toEqual(header);
  });

  it('should have subMessage attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('subMessage')).toEqual(subMessage);
  });
});
