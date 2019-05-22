import React from 'react';
import renderer from 'react-test-renderer';
// import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import ContactBody from '../index';

/* describe('<ContactBody />', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(false);
  });
}); */

describe('<ContactBody />', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(<ContactBody submitMessageForm={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
