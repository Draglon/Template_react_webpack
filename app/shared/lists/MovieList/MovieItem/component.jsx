import React from 'react';
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

export default MovieItemComponent;
