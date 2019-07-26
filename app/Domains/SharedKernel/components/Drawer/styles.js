import styled from 'styled-components';
import ThemeFactory from 'Domains/SharedStyles/ThemeFactory';
import BasicButton from 'Domains/SharedKernel/components/Buttons/BasicButton';
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
