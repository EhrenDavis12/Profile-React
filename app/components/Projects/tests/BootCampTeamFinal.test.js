import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import BootCampTeamFinal from '../BootCampTeamFinal';

describe('<BootCampTeamFinal />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<BootCampTeamFinal />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
