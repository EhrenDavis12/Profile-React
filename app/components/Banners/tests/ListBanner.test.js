import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import ListBanner from '../ListBanner';

const List = ['name1 ', 'name2'];

describe('<BannerSection />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(
      <ListBanner title="List Of Names" list={List} />,
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
