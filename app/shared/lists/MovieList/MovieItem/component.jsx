import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import Image from '../../../images/Image';

const MovieItemComponent = ({ item, actions }) => (
  <Card
    className="top-margin"
    hoverable
    cover={<Image className="movie__img" path={item.poster_path} alt={item.title} />}
    actions={actions}
  >
    <Link to={`/movie/${item.id}`}>
      <Card.Meta className="text-size" title={item.title} description={item.overview} />
    </Link>
  </Card>
);

MovieItemComponent.defaultProps = {
  actions: null,
};

MovieItemComponent.propTypes = {
  item: PropTypes.object.isRequired,
  actions: PropTypes.array,
};

export default MovieItemComponent;
