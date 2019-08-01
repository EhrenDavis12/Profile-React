import styled from 'styled-components';
import ThemeFactory from 'Domains/SharedStyles/ThemeFactory';
import BasicButton from 'Domains/SharedKernel/components/Buttons/BasicButton';

import { Link } from 'react-scroll';
const theme = ThemeFactory();

export const ItemButtonStyled = styled(BasicButton)`
  padding: 25px;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: solid 1px ${theme.SecondaryBkg};

  &:hover {
    background-color: ${theme.SecondaryBkg};
  }
`;

export const LinkStyled = styled(Link)`
  padding: 25px;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: solid 1px ${theme.SecondaryBkg};

  &:hover {
    background-color: ${theme.SecondaryBkg};
  }
`;

// display: ${props => (props.isDrawerOpen ? 'none' : 'true')};
export const HamburgerButtonStyled = styled(BasicButton)``;

export const Nav = styled.nav`
  padding-left: 0px;
  z-index: 900;
`;
