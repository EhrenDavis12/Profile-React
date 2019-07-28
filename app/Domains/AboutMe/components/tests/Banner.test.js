import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import BannerSection from '../Banner';

describe('<BannerSection />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(
      <BannerSection>
        <div>Hello Wold</div>
      </BannerSection>,
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
