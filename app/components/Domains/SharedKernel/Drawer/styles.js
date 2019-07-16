import styled from 'styled-components';
import BasicButton from 'components/Domains/SharedKernel/Buttons/BasicButton';

export const DrawerStyled = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.isDrawerOpen ? '0' : '-300px')};
  height: 100%;
  width: 300px;
  background: #fff;
  padding: 0px;
  transition: 0.25s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px, rgba(0, 0, 0, 0.22) 0px 3px 10px;
  z-index: 1000;

  &.drawerOpen {
    left: 0;
  }
`;

export const ItemButtonStyled = styled(BasicButton)`
  padding: 25px;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: solid 1px #f6f6f6;

  &:hover {
    background-color: #f6f6f6;
  }
`;
