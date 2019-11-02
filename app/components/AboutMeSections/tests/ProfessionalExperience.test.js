import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import ProfessionalExperience from '../ProfessionalExperience';

describe('<ProfessionalExperience />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<ProfessionalExperience />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
