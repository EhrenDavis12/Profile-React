import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import HeaderBar from 'components/Domains/SharedKernel/HeaderBar';
import AboutMePage from '../index';

describe('<AboutMePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<AboutMePage />);
    expect(
      renderedComponent.contains(
        <HeaderBar
          header="Ehren Davis"
          subMessage="Sr. Developer at Hyland .Inc"
        />,
      ),
    ).toEqual(true);
  });
});
