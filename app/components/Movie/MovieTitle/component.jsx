import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Typography } from 'antd';

import Popover from './Popover';
import WatchlistIcon from './WatchlistIcon';
import FavoriteIcon from './FavoriteIcon';

const MovieTitleComponent = ({ movie }) => (
  <Row className="top-margin">
    <Col span={20} offset={2}>
      <Typography.Title>
        <span>{movie.title}</span> <Popover movieId={movie.id} />{' '}
        <WatchlistIcon movieId={movie.id} watchlist={movie.watchlist} />{' '}
        <FavoriteIcon movieId={movie.id} favorite={movie.favorite} />
      </Typography.Title>
    </Col>
  </Row>
);

MovieTitleComponent.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieTitleComponent;
