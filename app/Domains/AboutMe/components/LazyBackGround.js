import PropTypes from 'prop-types';
import React from 'react';
import LazyHero from 'react-lazy-hero';

import BkgImgCalm from 'images/background-calm-clouds.jpg';

function LazyBackGround(props) {
  return (
    <LazyHero
      imageSrc={BkgImgCalm}
      opacity={0}
      parallaxOffset={2500}
      minHeight="290vh" // adjust this number to get more room or to center content
    >
      <div className="container">{props.children}</div>
    </LazyHero>
  );
}

LazyBackGround.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LazyBackGround;
