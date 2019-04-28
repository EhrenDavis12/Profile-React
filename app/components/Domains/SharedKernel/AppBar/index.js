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
import BasicButton from 'components/Domains/SharedKernel/Buttons/BasicButton';

function AppBar({ toggleDrawer }) {
  // return <div className={styles.appBar}>coder daily</div>;
  return (
    <div className="appBar">
      <BasicButton className="iconButton" func={toggleDrawer}>
        <FontAwesome className="icon" name="bars" />
      </BasicButton>
      {/* <div className="iconButton">
        <FontAwesome className="icon" name="bars" />
      </div> */}
      <div className="heading">Coder Daily</div>
      <div className="linkContainer">Log In</div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};

export default AppBar;
