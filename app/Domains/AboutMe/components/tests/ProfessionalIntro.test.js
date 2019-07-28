import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import ProfessionalIntro from '../ProfessionalIntro';

describe('<ProfessionalIntro />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(
      <ProfessionalIntro>
        <div>Hello Wold</div>
      </ProfessionalIntro>,
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
