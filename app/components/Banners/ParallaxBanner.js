import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import Header from 'components/Banners/Header';
import Banner from 'components/Banners/Banner';

const Container = styled.section`
  margin-bottom: 40px;
`;

const PaddingSections = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
  font-size: 2em;
`;

function SectionBanner(props) {
  return (
    <React.Fragment>
      <Parallax
        bgImage={props.image}
        strength={props.strength || 500}
        // bgImageStyle={{ width: '90%' }} // hight width: '90%'
      >
        <Container className="container">
          <Banner className="row">
            <div id={props.id}>
              <Header>{props.header}</Header>
            </div>
          </Banner>
          {props.children}
        </Container>
      </Parallax>
      <PaddingSections>| | |</PaddingSections>
    </React.Fragment>
  );
}

SectionBanner.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  strength: PropTypes.number,
};

export default SectionBanner;
