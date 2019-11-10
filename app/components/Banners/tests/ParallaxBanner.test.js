import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import BkgImg6 from 'images/BkgBanners/small_bluePur_sky.jpg';
import ParallaxBanner from '../ParallaxBanner';

describe('<ParallaxBanner />', () => {
  it('should render the page default Strength', () => {
    const renderedComponent = shallow(
      <ParallaxBanner image={BkgImg6} id="Hobbies" header="Hobbies">
        <div>Hello World</div>
      </ParallaxBanner>,
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render the page given Strength', () => {
    const renderedComponent = shallow(
      <ParallaxBanner
        image={BkgImg6}
        id="Hobbies"
        header="Hobbies"
        strength={1000}
      >
        <div>Hello World</div>
      </ParallaxBanner>,
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
