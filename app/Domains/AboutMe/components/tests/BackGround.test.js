import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import BackGround from '../BackGround';

describe('<BackGround />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(
      <BackGround>
        <div>Hello Wold</div>
      </BackGround>,
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
