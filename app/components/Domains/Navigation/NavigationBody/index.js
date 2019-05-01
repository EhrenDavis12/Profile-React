/**
 *
 * Navigation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import AppBar from 'components/Domains/Navigation/AppBar';
import Drawer from 'components/Domains/SharedKernel/Drawer';
import './index.css';

function NavigationBody({
  navigationLinks,
  toggleDrawer,
  selectItem,
  isDrawerOpen,
}) {
  /* const nav = (
    <nav>
      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
      </ul>
    </nav>
  ); */
  return (
    <>
      <AppBar toggleDrawer={toggleDrawer} />
      <Drawer
        items={navigationLinks}
        selectItem={selectItem}
        itemLabelAttr="DisplayName"
        itemKeyAttr="key"
        isDrawerOpen={isDrawerOpen}
      />
    </>
  );
}

NavigationBody.propTypes = {
  // links: PropTypes.array.isRequired,
  navigationLinks: PropTypes.array.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

export default NavigationBody;
