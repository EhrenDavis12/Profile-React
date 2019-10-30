import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Header from '../Header';

describe('<Header />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<Header>Hello Wold</Header>);
    expect(renderedComponent).toMatchSnapshot();
  });
});
