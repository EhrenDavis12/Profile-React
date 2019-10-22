import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

import BannerImg from 'images/sandpaper.png';

const Background = styled.section`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url('${BannerImg}');
  margin-top: 40px;
  border: 2px solid black;

  opacity: 0.9;
  filter: alpha(opacity=90);
`;

function BannerSection(props) {
  return <Background>{props.children}</Background>;
}

BannerSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BannerSection;
