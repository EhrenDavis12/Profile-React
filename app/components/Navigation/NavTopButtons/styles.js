import styled from 'styled-components';
import ThemeFactory from 'components/SharedStyles/ThemeFactory';
import BasicButton from 'components/Buttons/BasicButton';

import BannerImg from 'images/sandpaper.png';

import { Link } from 'react-scroll';
const theme = ThemeFactory();

// export const ItemButtonStyled = styled(BasicButton)`
//   padding: 25px;
//   text-transform: uppercase;

//   &:hover {
//     background-color: ${theme.SecondaryBkg};
//   }
// `;

export const LinkStyled = styled(Link)`
  padding: 15px 25px 15px 25px;
  text-transform: uppercase;
  cursor: pointer;
  // background-color: red;
  hight: 100px;

  &:hover {
    background-color: ${theme.SecondaryBkg};
  }
`;

// display: ${props => (props.isDrawerOpen ? 'none' : 'true')};
export const HamburgerButtonStyled = styled(BasicButton)``;

export const Nav = styled.nav`
  padding: 15px 0px 15px 20px;
  z-index: 900;
  background-image: url('${BannerImg}');
  background-color: ${theme.SecondaryBkg};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
