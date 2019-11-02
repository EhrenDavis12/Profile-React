import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import TechnicalSkills from '../TechnicalSkills';

describe('<TechnicalSkills />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<TechnicalSkills />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
