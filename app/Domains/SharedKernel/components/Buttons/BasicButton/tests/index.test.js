import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import BasicButton from '../index';

// const mockCallBack = jest.fn(() => true);
const obj = { status: 'successX' };
const children = <h1>foo</h1>;
const className = 'BasicButton';

const renderComponentShallow = (mockCallBack, mockObj) =>
  shallow(
    <BasicButton onClick={mockCallBack} obj={mockObj} className={className}>
      {children}
    </BasicButton>,
  );

describe('<BasicButton />', () => {
  /* it('renders as expected', () => {
    const renderedComponent = renderComponent();
    const tree = renderer.create(renderedComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });  */
  it('should have children', () => {
    const mockCallBack = jest.fn(() => true);
    const renderedComponent = renderComponentShallow(mockCallBack, obj);
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should handle click events', () => {
    const mockCallBack = jest.fn(() => true);
    const renderedComponent = renderComponentShallow(mockCallBack, obj);
    renderedComponent.simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });

  it('should handle click events with no objects', () => {
    const mockCallBack = jest.fn(() => true);
    const mockObj = null;
    const renderedComponent = renderComponentShallow(mockCallBack, mockObj);
    renderedComponent.simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });

  it('should handle Enter events', () => {
    const mockCallBack = jest.fn(() => true);
    const renderComponent = renderComponentShallow(mockCallBack, obj);
    renderComponent.simulate('keydown', { key: 'Enter' });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('Do not respond to bad key events', () => {
    const mockCallBack = jest.fn(() => true);
    const renderComponent = renderComponentShallow(mockCallBack, obj);
    renderComponent.simulate('keydown', { key: 'X' });
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });

  it('should handle Enter events with no objects', () => {
    const mockCallBack = jest.fn(() => true);
    const mockObj = null;
    const renderComponent = renderComponentShallow(mockCallBack, mockObj);
    renderComponent.simulate('keydown', { key: 'Enter' });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
