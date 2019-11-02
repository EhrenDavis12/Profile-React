import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import HylandExperience from '../HylandExperience';

describe('<HylandExperience />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<HylandExperience />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
