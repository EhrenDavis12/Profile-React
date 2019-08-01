/**
 *
 * AppBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { animateScroll as scroll } from 'react-scroll';
// import FontAwesome from 'react-fontawesome';
// import BasicButton from 'Domains/SharedKernel/components/Buttons/BasicButton';
import { Nav, HamburgerButtonStyled, LinkStyled } from './styles';
// import { Nav } from './styles';

function NavTopButtons({ toggleDrawer, items, itemLabelAttr, itemKeyAttr }) {
  /* scrollToTop = () => {
    scroll.scrollToTop();
  }; */

  const itemLinkAttr = 'LinkTo';
  const True = true; // eslint errors smooth=true
  const itemNodes = items.map(item => (
    <li className="nav-item" key={`${item[itemKeyAttr]}"_nav"`}>
      <LinkStyled
        activeClass="active"
        smooth={True}
        duration={600}
        to={`${item[itemLinkAttr]}`}
        offset={-70}
      >
        {item[itemLabelAttr]}
      </LinkStyled>
    </li>
  ));

  return (
    <Nav className="navbar sticky-top navbar-expand-md navbar-light">
      <HamburgerButtonStyled
        onClick={toggleDrawer}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </HamburgerButtonStyled>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav justify-content-end">{itemNodes}</ul>
      </div>
    </Nav>
  );
}

NavTopButtons.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  itemLabelAttr: PropTypes.string.isRequired,
  itemKeyAttr: PropTypes.string.isRequired,
};

export default NavTopButtons;
