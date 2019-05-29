/**
 *
 * Drawer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './styles.css';
import classNames from 'classnames';
import BasicButton from 'components/Domains/SharedKernel/Buttons/BasicButton';

function Drawer({
  items,
  selectItem,
  itemLabelAttr,
  itemKeyAttr,
  isDrawerOpen,
}) {
  const itemNodes = items.map(item => (
    <BasicButton
      className="item"
      key={item[itemKeyAttr]}
      onClick={() => selectItem(item)}
    >
      {item[itemLabelAttr]}
    </BasicButton>
  ));
  return (
    <div className={classNames('drawer', { drawerOpen: isDrawerOpen })}>
      {itemNodes}
    </div>
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
