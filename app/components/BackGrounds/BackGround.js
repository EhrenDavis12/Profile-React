import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ThemeFactory from 'components/SharedStyles/ThemeFactory';

const theme = ThemeFactory();

const BkgDiv = styled.div`
  background-color: ${theme.PrimaryBkg};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

// example of Parallax
// https://codesandbox.io/embed/r0yEkozrw?view=preview

function BackGround(props) {
  return (
    // <Parallax bgImage={BkgImgCalm} strength={props.strength || 500}>
    <BkgDiv>{props.children}</BkgDiv>
    // </Parallax>
  );
}

BackGround.propTypes = {
  children: PropTypes.node.isRequired,
  // strength: PropTypes.number,
};

export default BackGround;
