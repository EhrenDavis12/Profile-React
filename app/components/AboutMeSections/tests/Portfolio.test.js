import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Portfolio from '../Portfolio';

describe('<Portfolio />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<Portfolio />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
