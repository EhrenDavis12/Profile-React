/**
 *
 * Drawer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { DrawerStyled, LinkStyled, CoverStyled } from './styles';

function Drawer({
  items,
  selectItem,
  itemLabelAttr,
  itemKeyAttr,
  isDrawerOpen,
}) {
  const itemLinkAttr = 'LinkTo';
  const True = true; // eslint errors smooth=true
  const itemNodes = items.map(item => (
    <LinkStyled
      activeClass="active"
      smooth={True}
      duration={600}
      to={`${item[itemLinkAttr]}`}
      offset={-70}
      key={item[itemKeyAttr]}
      onClick={() => selectItem(item)}
    >
      {item[itemLabelAttr]}
    </LinkStyled>
  ));
  return (
    <React.Fragment>
      <CoverStyled isDrawerOpen={isDrawerOpen} onClick={() => selectItem(null)}>
        X
      </CoverStyled>
      <DrawerStyled isDrawerOpen={isDrawerOpen}>{itemNodes}</DrawerStyled>
    </React.Fragment>
  );
}

Drawer.propTypes = {
  items: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
  itemLabelAttr: PropTypes.string.isRequired,
  itemKeyAttr: PropTypes.string.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

export default Drawer;
