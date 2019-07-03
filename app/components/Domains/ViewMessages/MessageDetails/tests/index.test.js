import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import MessageDetails from '../index';

const obj = {
  subject: 'subject string',
  createdAt: 'created at time stamp',
  message: 'This is a test message',
};

/* const renderComponent = (mockCallBack, mockObj) => {
  renderer.create(
    <MessageDetails selectUserMessage={mockCallBack} userMessage={mockObj} />,
  );
}; */

describe('<MessageDetails />', () => {
  it('renders as expected', () => {
    const mockCallBack = jest.fn(() => true);
    const tree = renderer.create(
      <MessageDetails selectUserMessage={mockCallBack} userMessage={obj} />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Children should handle click events', () => {
    const mockCallBack = jest.fn(() => true);
    const tree = renderer.create(
      <MessageDetails selectUserMessage={mockCallBack} userMessage={obj} />,
    );
    // const tree = renderComponent(mockCallBack, obj);
    tree.root
      .findByProps({ className: 'MessageDetails-Box' })
      .children[0].props.onClick();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
