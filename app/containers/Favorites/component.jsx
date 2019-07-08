import React from 'react';
import { Row, Col, Typography, Modal, Icon } from 'antd';

import MovieList from '../MovieList';
import Pagination from '../Pagination';

const FavoritesComponent = ({ favorites, page, showDeleteMovieModal }) => (
  <>
    {favorites && (
      <>
        <Row>
          <Col offset={2} span={20}>
            <div className="top-margin">
              <Typography.Title>Favorites</Typography.Title>
            </div>
          </Col>
        </Row>
        <MovieList movies={favorites.results} actions={showDeleteMovieModal} />
        <Pagination currentPage={favorites.page} page={page} totalPages={favorites.totalPages} />
      </>
    )}
  </>
);

export default FavoritesComponent;
