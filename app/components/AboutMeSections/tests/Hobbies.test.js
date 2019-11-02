import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Hobbies from '../Hobbies';

describe('<Hobbies />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<Hobbies />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
