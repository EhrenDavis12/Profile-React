import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Languages from '../Languages';

describe('<Languages />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<Languages />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
