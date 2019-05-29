import React from 'react';
// import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';
import renderer from 'react-test-renderer';

import ResultBanner from '../index';

const testData = {
  resultClass: 'testClass',
  message: 'test message here',
};

const renderComponent = mockData =>
  renderer.create(<ResultBanner {...mockData} />);

describe('<ResultBanner />', () => {
  it('should have children with message', () => {
    const instance = renderComponent(testData).root;
    const component = instance.findByProps({
      className: testData.resultClass,
    });
    const text = component.children[0];
    expect(text).toEqual(testData.message);
  });

  it('renders as expected', () => {
    const tree = renderComponent(testData).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
