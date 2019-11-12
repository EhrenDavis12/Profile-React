import React from 'react';
import PropTypes from 'prop-types';
import Banner from 'components/Banners/Banner';
import { SectionBreak, Ul } from 'components/SharedStyles/styles';

function ListBanner(props) {
  const List = props.list.map(element => <li key={element}>{element}</li>);
  return (
    <Banner>
      <SectionBreak>
        <h4>{props.title}:</h4>
      </SectionBreak>
      <SectionBreak>
        <Ul>{List}</Ul>
      </SectionBreak>
    </Banner>
  );
}

ListBanner.propTypes = {
  list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default ListBanner;
