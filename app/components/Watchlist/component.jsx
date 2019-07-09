import React from 'react';
import { Row, Col, Typography } from 'antd';

import MovieList from '../../shared/lists/MovieList';
import Pagination from '../../shared/Pagination';

const WatchlistComponent = ({ watchlist, page, showDeleteMovieModal }) => (
  <>
    {watchlist && (
      <>
        <Row>
          <Col offset={2} span={20}>
            <div className="top-margin">
              <Typography.Title>Watchlist</Typography.Title>
            </div>
          </Col>
        </Row>
        <MovieList movies={watchlist.results} actions={showDeleteMovieModal} />
        <Pagination currentPage={watchlist.page} page={page} totalPages={watchlist.totalPages} />
      </>
    )}
  </>
);

export default WatchlistComponent;
