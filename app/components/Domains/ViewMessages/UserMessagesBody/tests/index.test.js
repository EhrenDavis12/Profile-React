import React from 'react';
import renderer from 'react-test-renderer';
// import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import UserMessagesBody from '../index';

const userMessage = {
  subject: 'subject string',
  createdAt: `01-01-2000 T 01:01:1000`,
  message: 'This is a test message',
};
const userMessages = [
  { ...userMessage, uuid: 'key1' },
  { ...userMessage, uuid: 'key2' },
];
const userData = { auth0Id: 'auth0Id' };

describe('<UserMessagesBody />', () => {
  it('renders as expected with populated messages', () => {
    const mockCallBack = jest.fn(() => true);
    console.log(JSON.stringify(userMessages[0]));
    const tree = renderer.create(
      <UserMessagesBody
        selectUserMessage={mockCallBack}
        userMessages={userMessages}
        userData={userData}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders as expected with null messages', () => {
    const mockCallBack = jest.fn(() => true);
    const tree = renderer.create(
      <UserMessagesBody
        selectUserMessage={mockCallBack}
        userMessages={[]}
        userData={userData}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Children should handle click events', () => {
    const mockCallBack = jest.fn(() => true);
    const tree = renderer.create(
      <UserMessagesBody
        selectUserMessage={mockCallBack}
        userMessages={userMessages}
        userData={userData}
      />,
    );
    console.log(
      tree.root.findByProps({ className: 'MessageDetails-Box' }).children[1]
        .children[0],
    );
    tree.root
      .findByProps({ className: 'MessageDetails-Box' })
      .children[1].children[0].props.onClick();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
