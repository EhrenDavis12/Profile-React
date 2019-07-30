import React from 'react';
import 'jest-styled-components';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import NavigationBody from '../index';

describe('<NavigationBody />', () => {
  it('renders as expected', () => {
    const tree = shallow(
      <NavigationBody
        navigationLinks={[
          {
            key: 'AboutMe',
            LinkTo: '/',
            DisplayName: 'About Me',
          },
          {
            key: 'Portfolio',
            LinkTo: '/portfolio',
            DisplayName: 'Portfolio',
          },
          {
            key: 'Contact',
            LinkTo: '/contact',
            DisplayName: 'Contact',
          },
          {
            key: 'Messages',
            LinkTo: '/messages',
            DisplayName: 'Messages',
          },
        ]}
        toggleDrawer={() => {}}
        selectItem={() => {}}
        isDrawerOpen={false}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
