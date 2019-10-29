import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const H2 = styled.h2`
  border-style: solid;
  border-width: 0px;
  border-bottom-width: 5px;
  margin-left: 20px;
`;

export const Row12 = styled.div`
  margin: 5px;
  class: row col-lg-12;
`;

function Header(props) {
  return (
    <Row12>
      <H2>{props.children}</H2>
    </Row12>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
