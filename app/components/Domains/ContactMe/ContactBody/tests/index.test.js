import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import ContactBody from '../index';

describe('<ContactBody />', () => {
  let wrapper;
  let submitMessageFormSpy;

  const renderComponentMount = () =>
    mount(<ContactBody submitMessageForm={submitMessageFormSpy} />);
  const renderComponentCreate = () =>
    renderer.create(<ContactBody submitMessageForm={submitMessageFormSpy} />);

  it('renders as expected SnapShot', () => {
    submitMessageFormSpy = jest.fn(() => true);
    const tree = renderComponentCreate().toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('On click of sumbit', () => {
    it('should submit with valid Email', () => {
      submitMessageFormSpy = jest.fn(() => true);
      wrapper = renderComponentMount();
      const emailInput = wrapper.find('#emailInput');
      emailInput.instance().value = 'test@test.com';
      emailInput.simulate('change');
      wrapper.find('#submit').simulate('click');
      expect(submitMessageFormSpy).toHaveBeenCalled();
      expect(wrapper.contains('Please provide a valid email')).toEqual(false);
    });

    it('should not submit with invalid Email', () => {
      submitMessageFormSpy = jest.fn(() => true);
      wrapper = renderComponentMount();
      const emailInput = wrapper.find('#emailInput');
      emailInput.instance().value = 'badValue';
      emailInput.simulate('change');
      wrapper.find('#submit').simulate('click');
      expect(submitMessageFormSpy.mock.calls.length).toBe(0);
      expect(wrapper.contains('Please provide a valid email')).toEqual(true);
    });
  });

  describe('On clear', () => {
    it('should submit with valid Email', () => {
      submitMessageFormSpy = jest.fn(() => true);
      wrapper = renderComponentMount();

      const emailInput = wrapper.find('#emailInput');
      emailInput.instance().value = 'test@test.com';
      emailInput.simulate('change');
      const subjectInput = wrapper.find('#subjectInput');
      subjectInput.instance().value = 'test';
      subjectInput.simulate('change');
      const messageInput = wrapper.find('#messageInput');
      messageInput.instance().value = 'test';
      messageInput.simulate('change');

      wrapper.find('#clear').simulate('click');

      expect(wrapper.contains('Please provide a valid email')).toEqual(false);
      expect(wrapper.find('#emailInput').instance().value).toEqual('');
      expect(wrapper.find('#subjectInput').instance().value).toEqual('');
      expect(wrapper.find('#messageInput').instance().value).toEqual('');
    });
  });
});
