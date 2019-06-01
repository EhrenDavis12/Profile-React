import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
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

describe('<UserMessagesBody /> snap Shots', () => {
  it('renders as expected with populated messages', () => {
    const mockCallBack = jest.fn(() => true);
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
        userMessages={null}
        userData={userData}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe('Evaluate Children counts', () => {
  it('Mount Should have array of children', () => {
    const mockCallBack = jest.fn(() => true);
    const wrapper = mount(
      <UserMessagesBody
        selectUserMessage={mockCallBack}
        userMessages={userMessages}
        userData={userData}
      />,
    );
    expect(wrapper.find('MessageDetails').length).toEqual(2);
  });

  it('Mount Should have array of children', () => {
    const mockCallBack = jest.fn(() => true);
    const wrapper = mount(
      <UserMessagesBody
        selectUserMessage={mockCallBack}
        userMessages={null}
        userData={userData}
      />,
    );
    expect(wrapper.find('MessageDetails').length).toEqual(0);
  });
});
