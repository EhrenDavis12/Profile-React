import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Books from '../Books';

describe('<Books />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<Books />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
