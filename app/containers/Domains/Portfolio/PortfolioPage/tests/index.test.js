import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import Navigation from 'containers/Domains/Navigations/Navigation/Loadable';
import HomePage from '../index';

const renderComponent = () => shallow(<HomePage />);

describe('<HomePage />', () => {
  it('should render the Navigation', () => {
    const wrapper = renderComponent();
    expect(wrapper.contains(<Navigation />)).toEqual(true);
  });
});
