import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Education from '../Education';

describe('<Education />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<Education />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
