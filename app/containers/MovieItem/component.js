import React from 'react';
import { Card } from 'antd';

const cover = item => (
  <img alt={item.title} src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
);

const Movie = ({ item }) => (
  <Card hoverable cover={cover(item)} className="top-margin" actions={item}>
    <Card.Meta title={item.title} description={item.overview} />
  </Card>
);

export default Movie;
