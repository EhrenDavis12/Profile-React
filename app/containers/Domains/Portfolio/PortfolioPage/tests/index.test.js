import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import Navigation from 'containers/Domains/Navigations/Navigation/Loadable';
import HomePage from '../index';

describe('<HomePage />', () => {
  const renderedComponent = shallow(<HomePage />);
  expect(renderedComponent.contains(<Navigation />)).toEqual(true);
});
