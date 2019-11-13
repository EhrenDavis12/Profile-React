import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import PortfolioWebSite from '../PortfolioWebSite';

describe('<PortfolioWebSite />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<PortfolioWebSite />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
