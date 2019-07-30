import PropTypes from 'prop-types';
import React from 'react';
import { Parallax } from 'react-parallax';

import BkgImgCalm from 'images/background-calm-clouds.jpg';

// example of Parallax
// https://codesandbox.io/embed/r0yEkozrw?view=preview

function BackGround(props) {
  return (
    <Parallax bgImage={BkgImgCalm} strength={props.strength || 500}>
      <div className="container">{props.children}</div>
    </Parallax>
  );
}

BackGround.propTypes = {
  children: PropTypes.node.isRequired,
  strength: PropTypes.number,
};

export default BackGround;
