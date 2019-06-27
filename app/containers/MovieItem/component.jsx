import React from 'react';
import { Card } from 'antd';

const cover = item => (
  <img alt={item.title} src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
);

const MovieItemComponent = ({ item }) => (
  <Card className="top-margin" hoverable cover={cover(item)} actions={item}>
    <Card.Meta className="text-size" title={item.title} description={item.overview} />
  </Card>
);

export default MovieItemComponent;
