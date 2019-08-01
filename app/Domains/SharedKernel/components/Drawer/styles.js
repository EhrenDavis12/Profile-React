import styled from 'styled-components';
import ThemeFactory from 'Domains/SharedStyles/ThemeFactory';
import BasicButton from 'Domains/SharedKernel/components/Buttons/BasicButton';
import { Link } from 'react-scroll';
const theme = ThemeFactory();

export const DrawerStyled = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.isDrawerOpen ? '0' : '-300px')};
  height: 100%;
  width: 300px;
  background: ${theme.PrimaryBkg};
  padding: 0px;
  transition: 0.25s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px, rgba(0, 0, 0, 0.22) 0px 3px 10px;
  z-index: 1000;
  color: ${theme.PrimaryText};

  &.drawerOpen {
    left: 0;
  }
`;

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
  display: block;

  &:hover {
    background-color: ${theme.SecondaryBkg};
  }
`;

export const CoverStyled = styled(BasicButton)`
  position: fixed;
  top: 0;
  display: ${props => (props.isDrawerOpen ? '' : 'none')};
  height: 100%;
  width: 100%;
  background: rgba(50, 50, 50, 0.5);
  transition: 0.25s ease-in-out;
  z-index: 950;

  padding-left: 305px;
  font-size: 25px;
  color: rgba(0, 0, 0, 1);
`;
