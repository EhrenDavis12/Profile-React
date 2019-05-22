import React from 'react';
import renderer from 'react-test-renderer';
// import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import NavigationBody from '../index';

describe('<NavigationBody />', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(
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
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
