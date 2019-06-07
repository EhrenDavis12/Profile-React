import React from 'react';
// import renderer from 'react-test-renderer';
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

const renderComponentMount = userMessagesProp =>
  mount(
    <UserMessagesBody
      selectUserMessage={mockCallBack}
      userMessages={userMessagesProp}
      userData={userData}
    />,
  );

let mockCallBack;
beforeAll(() => {
  mockCallBack = jest.fn(() => true);
});

describe('<UserMessagesBody /> snap Shots', () => {
  it('renders as expected with populated messages', () => {
    const wrapper = renderComponentMount(userMessages);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as expected with null messages', () => {
    const wrapper = renderComponentMount(null);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Evaluate userMessages counts', () => {
  it('Mount Should have array of children', () => {
    const wrapper = renderComponentMount(userMessages);
    expect(wrapper.find('MessageDetails').length).toEqual(2);
  });

  it('Mount Should have array of children', () => {
    const wrapper = renderComponentMount(null);
    expect(wrapper.find('MessageDetails').length).toEqual(0);
  });
});
