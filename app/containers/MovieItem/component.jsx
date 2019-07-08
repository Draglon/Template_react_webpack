import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const cover = item => (
  <Link to={`movie/${item.id}`}>
    <img
      className="movie__img"
      alt={item.title}
      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
    />
  </Link>
);

const MovieItemComponent = ({ item, actions }) => (
  <Card className="top-margin" hoverable cover={cover(item)} actions={actions}>
    <Link to={`movie/${item.id}`}>
      <Card.Meta className="text-size" title={item.title} description={item.overview} />
    </Link>
  </Card>
);

export default MovieItemComponent;
