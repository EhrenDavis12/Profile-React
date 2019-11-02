import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import CadtelExperience from '../CadtelExperience';

describe('<CadtelExperience />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<CadtelExperience />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
