import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import DesertCodeCamp from '../DesertCodeCamp';

describe('<DesertCodeCamp />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<DesertCodeCamp />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
