import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const cover = item => (
  <img alt={item.title} src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
);

const MovieItemComponent = ({ item, item: { id, title, overview } }) => (
  <Link to={`movie/${id}`}>
    <Card className="top-margin" hoverable cover={cover(item)} actions={item}>
      <Card.Meta className="text-size" title={title} description={overview} />
    </Card>
  </Link>
);

export default MovieItemComponent;
