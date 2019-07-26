import React from 'react';
import renderer from 'react-test-renderer';
// import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import AppBar from '../index';

describe('<AppBar />', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<AppBar toggleDrawer={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
