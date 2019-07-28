import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import LazyBackGround from '../LazyBackGround';

describe('<LazyBackGround />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(
      <LazyBackGround>
        <div>Hello Wold</div>
      </LazyBackGround>,
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
