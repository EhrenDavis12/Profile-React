import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import HomePage from '../index';

const renderComponent = () => shallow(<HomePage />);

describe('<HomePage />', () => {
  it('should render the HomePage', () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });
});
