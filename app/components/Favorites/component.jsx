import React from 'react';
import { Row, Col, Typography } from 'antd';

import MovieList from '../../shared/lists/MovieList';
import Pagination from '../../shared/Pagination';

const FavoritesComponent = ({ favorites, page, modalParams }) => (
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
        <MovieList movies={favorites.results} modalParams={modalParams} />
        <Pagination currentPage={favorites.page} page={page} totalPages={favorites.totalPages} />
      </>
    )}
  </>
);

export default FavoritesComponent;
