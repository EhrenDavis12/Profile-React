import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import MicroServiceSample from '../MicroServiceSample';

describe('<MicroServiceSample />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<MicroServiceSample />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
