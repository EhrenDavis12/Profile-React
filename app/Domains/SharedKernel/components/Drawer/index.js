/**
 *
 * Drawer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { DrawerStyled, ItemButtonStyled } from './styles';

function Drawer({
  items,
  selectItem,
  itemLabelAttr,
  itemKeyAttr,
  isDrawerOpen,
}) {
  const itemNodes = items.map(item => (
    <ItemButtonStyled key={item[itemKeyAttr]} onClick={() => selectItem(item)}>
      {item[itemLabelAttr]}
    </ItemButtonStyled>
  ));
  return <DrawerStyled isDrawerOpen={isDrawerOpen}>{itemNodes}</DrawerStyled>;
}

Drawer.propTypes = {
  items: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
  itemLabelAttr: PropTypes.string.isRequired,
  itemKeyAttr: PropTypes.string.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

export default Drawer;
