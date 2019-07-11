import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Typography } from 'antd';

import MovieList from '../../shared/lists/MovieList';
import Pagination from '../../shared/Pagination';

const WatchlistComponent = ({ watchlist, page, modalParams }) => (
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
        <MovieList movies={watchlist.results} modalParams={modalParams} />
        <Pagination currentPage={watchlist.page} page={page} totalPages={watchlist.totalPages} />
      </>
    )}
  </>
);

WatchlistComponent.propTypes = {
  watchlist: PropTypes.object.isRequired,
  page: PropTypes.func.isRequired,
  modalParams: PropTypes.object.isRequired,
};

export default WatchlistComponent;
