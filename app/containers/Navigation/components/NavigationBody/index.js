/**
 *
 * Navigation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import NavTopButtons from 'containers/Navigation/components/NavTopButtons';
import Drawer from 'components/Drawer';

function NavigationBody({
  navigationLinks,
  toggleDrawer,
  selectItem,
  isDrawerOpen,
}) {
  return (
    <React.Fragment>
      <NavTopButtons
        toggleDrawer={toggleDrawer}
        items={navigationLinks}
        selectItem={selectItem}
        itemLabelAttr="DisplayName"
        itemKeyAttr="key"
      />
      <Drawer
        items={navigationLinks}
        selectItem={selectItem}
        itemLabelAttr="DisplayName"
        itemKeyAttr="key"
        isDrawerOpen={isDrawerOpen}
      />
    </React.Fragment>
  );
}

NavigationBody.propTypes = {
  navigationLinks: PropTypes.array.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

export default NavigationBody;
