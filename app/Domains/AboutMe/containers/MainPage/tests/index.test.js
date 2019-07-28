import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import AboutMePage from '../index';

describe('<AboutMePage />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<AboutMePage />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
