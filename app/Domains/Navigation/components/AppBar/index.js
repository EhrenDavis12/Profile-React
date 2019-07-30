/**
 *
 * AppBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './styles.css';
import FontAwesome from 'react-fontawesome';
import BasicButton from 'Domains/SharedKernel/components/Buttons/BasicButton';
import { Nav } from './styles';

function AppBar({ toggleDrawer }) {
  // return <div className={styles.appBar}>coder daily</div>;
  return (
    <Nav>
      <BasicButton className="iconButton" onClick={toggleDrawer}>
        <FontAwesome className="icon" name="bars" />
      </BasicButton>
      <div className="heading">Ehren Davis</div>
      <div className="linkContainer">Log In</div>
    </Nav>
  );
}

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};

export default AppBar;
